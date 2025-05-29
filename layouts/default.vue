<template>
  <div class="entry default">
    <component :is="frame"> <NuxtPage /></component>
  </div>
</template>
<script lang="ts" setup>
import FramesEmpty from "@/components/Frames/Empty.vue";
import FramesUnlogged from "@/components/Frames/Unlogged.vue";
import FramesLogged from "@/components/Frames/Logged.vue";
const route = useRoute();
const unloggedRoutes = ref([
  "contact",
  "about",
  "contact",
  "index",
  "programs",
  "programs-enroll",
]);
const routeName = computed(() => route.name);
console.log("log", routeName.value);
const frame = computed(() => {
  if (unloggedRoutes.value.includes(String(routeName.value)))
    return FramesUnlogged;
  if (!unloggedRoutes.value.includes(String(routeName.value))) {
    return FramesLogged;
  }
  return FramesEmpty;
});
</script>

<style lang="scss" scoped>
.entry.default {
  width: 100vw;
  height: 100vh;
}
</style>
