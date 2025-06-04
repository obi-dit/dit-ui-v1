<template>
  <div class="flex space-x-2 items-center justify-center h-48">
    <span
      v-for="(letter, index) in letters"
      :key="index"
      class="text-4xl font-bold text-primary animate-pulse"
      :style="{
        animationDelay: `${index * 0.2}s`,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
      }"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script setup lang="ts">
const letters = ["D", "I", "T"];
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-pulse {
  animation-name: pulse;
}
</style>
