<template>
  <div
    class="min-h-screen py-16 px-6 md:px-12 page entry enroll overflow-hidden overflow-y-auto"
  >
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 class="text-3xl font-bold text-center text-primary mb-8">
        Enroll Now
      </h1>

      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <!-- Name -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Full Name</label
          >
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Email Address</label
          >
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Program Selection -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Select Program</label
          >
          <select
            v-model="form.program"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-primary"
          >
            <option
              value=""
              disabled
            >
              Select a program
            </option>
            <option
              value="AI Essentials"
              class="text-primary"
            >
              🤖 AI Essentials Program ($250 Installment / $8,500 Total)
            </option>
            <option
              value="IT Fundamentals"
              class="text-primary"
            >
              🧠 IT Fundamentals Program ($250 Installment / $6,500 Total)
            </option>
            <option
              value="Helpdesk Support"
              class="text-primary"
            >
              🧰 Helpdesk Support Program ($250 Installment / $6,500 Total)
            </option>
          </select>
        </div>

        <!-- Message -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700"
            >Message (Optional)</label
          >
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Submit Enrollment
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  program: "",
  message: "",
});

function handleSubmit() {
  console.log("Enrollment submitted:", form.value);
  alert("Thank you for enrolling! We will contact you soon.");
  form.value = {
    name: "",
    email: "",
    program: "",
    message: "",
  };
}
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
