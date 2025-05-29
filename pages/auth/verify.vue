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
        Verify Your Email
      </h2>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField
          label="Verification Token"
          name="token"
        >
          <UInput v-model="state.token" />
        </UFormField>
        <p
          class="text-primary cursor-pointer"
          @click.prevent="requestNewToken"
        >
          Request new token
        </p>
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
import { ref } from "vue";
import { useUser } from "@/stores/user";
import type { RegistrationResponse, UserProfileType } from "@/types/logged";

import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = v.object({
  token: v.pipe(v.string(), v.nonEmpty("Please enter token")),
});

type Schema = v.InferOutput<typeof schema>;
const user = useUser();

const state = reactive({
  token: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const responseJson = await useRequest("auth/verify-token", {
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
  } catch (error) {
    useHandlingGlobalErrorMessages(error, "verifying email");
  }
}

const requestNewToken = async () => {
  try {
    const responseJson = await useRequest("auth/request-token", {
      method: "GET",
    });

    if (successCodes.includes(responseJson.status)) {
      user.getMe();
      toast.add({
        description: `Successful`,
        color: "success",
      });
    }
  } catch (error) {
    useHandlingGlobalErrorMessages(error, "requesting token");
  }
};
</script>

<style scoped></style>
