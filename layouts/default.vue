<template>
  <div class="entry default bg-primary">
    <component :is="frame">
      <slot />
    </component>
  </div>
</template>
<script lang="ts" setup>
const frame = computed(() => {
  return "FramesEmpty";
});
</script>

<style lang="scss" scoped>
.entry.default {
  width: 100vw;
  height: 100vh;
}
</style>
