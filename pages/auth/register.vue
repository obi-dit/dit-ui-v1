<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gray-100 px-4"
  >
    <div class="bg-white shadow-lg rounded-xl p-8 md:p-10 w-full max-w-md">
      <div class="flex justify-center mb-6">
        <img
          src="~/assets/pngs/DIT_Logo_Transparent.png"
          alt="DIT Logo"
          class="h-30"
        />
      </div>
      <h2 class="text-2xl font-bold text-primary mb-6 text-center">
        Create an Account
      </h2>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="First Name" name="firstName">
          <UInput v-model="state.firstName" />
        </UFormField>
        <UFormField label="Last Name" name="lastName">
          <UInput v-model="state.lastName" />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>

        <UButton
          type="submit"
          class="block bg-secondary hover:bg-secondary text-white w-full py-3 rounded-lg font-semibold transition text-center"
        >
          Submit
        </UButton>
      </UForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RegistrationResponse, UserProfileType } from "@/types/logged";

import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = v.object({
  firstName: v.pipe(
    v.string(),
    v.minLength(3, "First Name must be at least 3")
  ),
  lastName: v.pipe(v.string(), v.minLength(3, "Last Name must be at least 3")),
  email: v.pipe(v.string(), v.email("Invalid email")),
  password: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
});

type Schema = v.InferOutput<typeof schema>;
const user = useUser();

const state = reactive({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const responseJson = await useRequest("auth/register", {
      method: "POST",
      body: {
        ...state,
      },
    });

    if (successCodes.includes(responseJson.status)) {
      toast.add({
        description: `Successful`,
        color: "success",
      });
    }

    const responseData =
      responseJson._data as RegistrationResponse<UserProfileType>;

    await user.setUserRegistrationDataPoint(
      responseData.accessToken,
      responseData.user
    );

    if (!user.isVerifiedUser) {
      return navigateTo("/auth/verify");
    }
  } catch (error) {
    useHandlingGlobalErrorMessages(error, "registering user");
  }
}
</script>

<style scoped></style>
