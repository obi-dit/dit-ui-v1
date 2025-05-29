<template>
  <div
    class="rounded-2xl border p-4 shadow-sm hover:shadow-md transition bg-white space-y-2"
    :class="{ 'border-blue-500': isCurrent }"
  >
    <h3 class="text-lg font-semibold text-primary">
      {{ course.title }}
    </h3>
    <p class="text-gray-600 text-sm">
      {{ course.description }}
    </p>
    <div v-if="isCurrent" class="text-secondary text-sm font-medium">
      Currently Enrolled
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  course: {
    title: string;
    description: string;
    progress?: number;
  };
  isCurrent?: boolean;
}>();
</script>
