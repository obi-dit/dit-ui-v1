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
        Login to Your Account
      </h2>

      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" required class="input" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input v-model="password" type="password" required class="input" />
        </div>

        <button
          type="submit"
          class="bg-secondary hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        <p class="text-sm text-gray-600 text-center mt-4">
          Don't have an account?
          <NuxtLink
            to="/register"
            class="text-primary font-semibold hover:underline"
            >Register</NuxtLink
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  alert(`Logging in with ${email.value}`);
  // TODO: Hook into authentication system or API
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  outline: none;
}
.input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}
</style>
