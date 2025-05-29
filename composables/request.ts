import { isArray, isObject, keys, merge } from "lodash-es";
import { useOnline } from "@vueuse/core";
import * as qs from "qs";
import { useUser } from "~/stores/user";

export const useRequestOptions = () => {
  const runtimeConfig = useRuntimeConfig();
  console.log("log", runtimeConfig.public);
  return {
    baseURL: runtimeConfig.public.apiUrl,
    retry: 5,
    method: "GET",
    onRequest({ options }) {
      const user = useUser();

      const addHeader: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      if (user.token) {
        addHeader.Authorization = `Bearer ${user.token}`;
      }

      const addedHeaderList: Record<string, string>[] = [addHeader];

      const headers:
        | HeadersInit
        | Record<string, unknown>
        | [string, string][] = options.headers || {};
      for (const addedHeader of addedHeaderList) {
        for (const key of keys(addedHeader)) {
          const value = addedHeader[key];

          if (isArray(headers)) {
            headers.push([key, value]);
          } else if (headers instanceof Headers) {
            headers.set(key, value);
          } else if (isObject(headers)) {
            (headers as Record<string, unknown>)[key] = value;
          }
        }
      }

      options.headers = headers;
    },
    async onResponse({ response }) {
      const user = useUser();

      if (response.headers.has("NEW_AUTH_TOKEN")) {
        const token = response.headers.get("NEW_AUTH_TOKEN");

        if (token) {
          await user.setToken(token);
        }
      }

      if (response.status === 401) {
        const resp = response._data as Record<string, unknown>;

        await user.logout();
      }
    },
  } as Parameters<typeof $fetch.raw>[1];
};

export const useRequest = <ResponseType>(
  ...args: Parameters<typeof $fetch.raw<ResponseType>>
): Promise<ReturnType<typeof $fetch.raw<ResponseType>>> => {
  const [url, opts] = args;

  let options = opts;
  if (!isObject(options)) {
    options = {};
  }

  console.log("log", useRequestOptions());

  options = {
    ...useRequestOptions(),
    ...options,
  };

  let params = {};
  if (options.query) {
    params = merge(params, options.query);
  }

  if (options.params) {
    params = merge(params, options.params);
  }

  delete options.params;
  delete options.query;

  const query = qs.stringify(params);
  if (query) {
    const params = new URLSearchParams(query);
    options.params = Object.fromEntries(params);
  }

  return $fetch.raw(url, options) as unknown as Promise<
    ReturnType<typeof $fetch.raw<ResponseType>>
  >;
};

export const useFetchRequest = async <ResponseType, ErrorType>(
  ...args: Parameters<typeof useFetch<ResponseType, ErrorType>>
) => {
  const url = args[0];
  let opts = args[1];

  if (!isObject(opts)) {
    opts = {};
  }

  const options = {
    ...useRequestOptions(),
    lazy: true,
    method: "GET",
    ...opts,
  } as typeof opts;

  let params = {};
  if (options && options.query) {
    params = merge(params, options.query);
  }

  if (options && options.params) {
    params = merge(params, options.params);
  }

  if (options) {
    delete options.params;
    delete options.query;
  }

  const query = qs.stringify(params);
  if (query) {
    const params = new URLSearchParams(query);
    options.params = Object.fromEntries(params);
  }

  return await useFetch<ResponseType, ErrorType>(url, options);
};

export const isOnline = computed(() => useOnline().value);
