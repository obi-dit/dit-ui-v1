<template>
  <nav class="bg-primary text-white px-6 py-4 shadow-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <NuxtLink to="/" class="text-xl font-semibold">
          <img src="@/assets/pngs/DIT_Logo_Transparent.png" class="h-16" />
        </NuxtLink>
      </div>

      <!-- Hamburger Icon (Mobile Only) -->
      <button
        class="md:hidden focus:outline-none"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navigation Links (Desktop) -->
      <ul class="hidden md:flex space-x-8 text-sm font-medium">
        <li>
          <NuxtLink
            to="https://diversityintechnology.moodlecloud.com/login/index.php"
            class="hover:text-secondary transition"
            >Student Portal</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="hover:text-secondary transition"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-secondary transition"
            >Contact</NuxtLink
          >
        </li>
      </ul>

      <!-- Join Button (Desktop Only) -->
      <div class="hidden md:block">
        <button
          class="bg-secondary cursor-pointer hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
          @click="goToLogin"
        >
          Join a Program
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4 bg-primary"
    >
      <NuxtLink to="/programs" class="hover:text-secondary transition"
        >Student Portal</NuxtLink
      >
      <NuxtLink to="/about" class="hover:text-secondary transition"
        >About</NuxtLink
      >
      <NuxtLink to="/contact" class="hover:text-secondary transition"
        >Contact</NuxtLink
      >
      <button
        class="mt-2 bg-secondary hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
      >
        Join a Program
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const goToLogin = () => {
  navigateTo("/programs");
};
</script>
