import { get } from "lodash-es";

import { FetchError } from "ofetch";
import { isErrorResponse } from "~~/types/logged";

export const useHandlingGlobalErrorMessages = async (
  e: Event | unknown,
  component: string,
  errorType: "default" | "custom" = "default",
) => {
  if (!import.meta.client) return;
  const toast = useToast();
  if (e instanceof FetchError) {
    const status = parseInt(String(get(e, "response.status", "0")), 10);
    if (status >= 400) {
      const errResponse = await e.data;
      console.log(errResponse, "data");
      if (isErrorResponse(errResponse)) {
        console.log("log here");
        return toast.add({
          description: `${errResponse.message}`,
          color: "error",
        });
      }
      return toast.add({
        description: `${errResponse.error}`,
        color: "error",
      });
    }
  } else if (!isOnline.value) {
    return toast.add({
      description:
        ' "Ooops.. An error occured while sending request.. PLease check your internet connection',
      color: "error",
    });
  }
  if (errorType === "custom") {
    return toast.add({
      description: `${component}`,
      color: "error",
    });
  }
  return toast.add({
    description: ` ${component}`,
    color: "error",
  });
};
