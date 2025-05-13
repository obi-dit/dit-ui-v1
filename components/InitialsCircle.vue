<template>
  <div
    class="rounded-full bg-white flex justify-center items-center text-primary font-bold"
    :style="{ width, height }"
  >
    {{ getInitials(initials) }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  initials: string;
  width?: string;
  height?: string;
}

const props = defineProps<Props>();

const width = computed(() => (props.width ? `${props.width}px` : "24px"));
const height = computed(() => (props.height ? `${props.height}px` : "24px"));
</script>
