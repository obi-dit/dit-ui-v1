<template>
  <section class="bg-white py-16 px-4 md:px-10 text-gray-800 rounded-lg">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary">
        Explore Our Programs
      </h2>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="program in programs"
          :key="program.title"
          class="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold text-primary mb-2">
            {{ program.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-1">
            <!-- <span class="font-medium">Ages:</span> {{ program.ageRange }} -->
          </p>
          <p class="text-gray-700 text-sm mb-4">
            {{ program.description }}
          </p>
          <NuxtLink
            :to="program.link"
            class="inline-block mt-auto text-white bg-primary hover:bg-light-blue px-4 py-2 rounded font-medium text-sm"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const programs = [
  {
    title: "AI Essentials Program",
    ageRange: "18–24",
    description:
      "Learn how machines think and make decisions using AI fundamentals.",
    link: "/programs",
  },
  {
    title: "Google IT Fundamentals",
    ageRange: "18–24",
    description:
      "An IT Support program, trains individuals to provide technical assistance to users of computer systems and software.",
    link: "/programs",
  },
  {
    title: "Help desk Support ",
    ageRange: "18–24",
    description:
      "IT Fundamentals provides an introduction to the core concepts and skills needed to work in the information technology field.",
    link: "/programs",
  },
];
</script>

<style scoped>
/* optional scoped styles if needed */
</style>
