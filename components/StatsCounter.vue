<template>
  <section class="bg-white py-16 px-6 md:px-16 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-12">
      Our Impact
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in counters"
        :key="index"
        class="flex flex-col items-center"
      >
        <NuxtIcon
          :name="item.icon"
          class="text-accent-blue text-5xl mb-4"
        />
        <p class="text-4xl font-bold text-primary">{{ item.current }}</p>
        <p class="text-lg text-gray-600">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const counters = ref([
  {
    label: "Active Students",
    value: 32,
    current: 0,
    icon: "users", // Make sure this icon exists in your icon set
  },
  {
    label: "Online Courses",
    value: 3,
    current: 0,
    icon: "book-open", // Ensure this is added in your icon collection
  },
  {
    label: "Registered Students",
    value: 40,
    current: 0,
    icon: "check-circle", // Ensure it's registered or exists
  },
]);

function animateCounter(item: any) {
  const duration = 2000;
  const startTime = performance.now();

  function update(time: number) {
    const progress = Math.min((time - startTime) / duration, 1);
    item.current = Math.floor(progress * item.value);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      item.current = item.value;
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  counters.value.forEach((item) => animateCounter(item));
});
</script>
