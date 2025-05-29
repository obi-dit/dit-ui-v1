import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import type { UserProfileType } from "~/types/logged";

export const useUser = defineStore("user", () => {
  const token = useStorage<string | null>("token", null);
  const profileObject = ref<UserProfileType>();

  const setToken = (value: string) => {
    token.value = value;
  };

  const logout = () => {};

  const isLogged = computed(() => {
    return !!token.value;
  });

  const setUserRegistrationDataPoint = async (
    tokenValue: string,
    user: UserProfileType,
  ) => {
    console.log({ tokenValue, user });
    if (tokenValue) {
      token.value = tokenValue;
    }

    if (user) {
      profileObject.value = user;
    }
  };

  const isVerifiedUser = computed(() => {
    return profileObject.value && profileObject.value.isVerified;
  });
  const getMe = async () => {
    try {
      const responseJson = await useRequest("auth/me");
      const succesfulResponse = [200, 201, 204];
      if (succesfulResponse.includes(responseJson.status)) {
        const responseData = responseJson._data as UserProfileType;
        profileObject.value = responseData;
      }
    } catch (error) {
      useHandlingGlobalErrorMessages(error, "profile");
    }
  };

  return {
    setUserRegistrationDataPoint,
    getMe,
    profileObject,
    token,
    setToken,
    logout,
    isLogged,
    isVerifiedUser,
  };
});
