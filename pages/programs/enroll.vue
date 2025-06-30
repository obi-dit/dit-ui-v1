<template>
  <div
    class="min-h-screen py-16 px-6 md:px-12 page entry enroll overflow-hidden overflow-y-auto"
  >
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 class="text-3xl font-bold text-center text-primary mb-8">
        Enroll Now
      </h1>

      <UForm
        :schema="schema"
        :state="form"
        class="space-y-6"
        @submit="handleSubmit"
      >
        <!-- Name -->

        <UFormField label="Full Name" name="name">
          <UInput v-model="form.name" placeholder="Enter your full name" />
        </UFormField>

        <!-- Email -->

        <UFormField label="Email Address" name="email">
          <UInput v-model="form.email" placeholder="Enter your Email address" />
        </UFormField>

        <!-- Program Selection -->
        <!-- <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Select Program</label
          >
          <select
            v-model="form.program"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          >
            <option value="" disabled>Select a program</option>
            <option value="AI Essentials" class="text-primary">
              🤖 AI Essentials Program ($250 Installment / $8,500 Total)
            </option>
            <option value="IT Fundamentals" class="text-primary">
              🧠 IT Fundamentals Program ($250 Installment / $6,500 Total)
            </option>
            <option value="Helpdesk Support" class="text-primary">
              🧰 Helpdesk Support Program ($250 Installment / $6,500 Total)
            </option>
          </select>
        </div> -->

        <UFormField label="Select Program" name="program">
          <USelect v-model="form.program" :items="allPrograms" class="w-48" />
        </UFormField>
        <!-- Message -->
        <UFormField label="Message (Optional)" name="message">
          <UTextarea v-model="form.message" />
        </UFormField>

        <!-- Submit Button -->
        <div class="text-center">
          <UButton
            :loading="isSubmitting"
            type="submit"
            class="bg-primary cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Submit Enrollment
          </UButton>
        </div>
      </UForm>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { ProgramsType } from "~/types/general";
const form = ref({
  name: "",
  email: "",
  program: "",
  message: "",
});

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(3, "Estate Name must be at least 3")),
  email: v.pipe(v.string(), v.email()),
  program: v.pipe(v.string(), v.minLength(3, "Program must not be empty")),
  message: v.pipe(v.string(), v.maxLength(1000)),
});

type Schema = v.InferOutput<typeof schema>;

const allPrograms = asyncComputed(async () => {
  try {
    const response = await useRequest("programs");
    const responseJson = response._data as ProgramsType[];
    if (response.status === 200) {
      return responseJson.map((program) => ({
        value: program.id,
        label: program.title,
      }));
    }
  } catch (error) {
    useHandlingGlobalErrorMessages(error, "getting programs", "default");
  }
});
const isSubmitting = ref(false);
const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    const response = await useRequest("enrollment", {
      method: "POST",
      body: {
        name: form.value.name,
        email: form.value.email,
        programId: form.value.program,
        message: form.value.message,
      },
    });

    const successfulResponseCode = [200, 201, 204];
    if (successfulResponseCode.includes(response.status)) {
      const responseJson = response._data as { url: string };
      window.open(responseJson.url);
      isSubmitting.value = false;
    }
    isSubmitting.value = false;
  } catch (error) {
    isSubmitting.value = false;
    useHandlingGlobalErrorMessages(error, "enrolling", "default");
  }
};
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1e40af;
}
.text-primary {
  color: #1e3a8a;
}

.page.entry.enroll {
  height: calc(100vh - 100px);
}
</style>
