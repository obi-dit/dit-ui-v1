<template>
  <div class="border p-4 rounded-lg bg-white shadow-sm">
    <h3 v-if="title" class="text-md font-semibold mb-2 text-primary">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
