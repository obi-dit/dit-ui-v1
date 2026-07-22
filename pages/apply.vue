<template></template>
<script setup lang="ts">
const config = useRuntimeConfig();
const redirectUrl = computed(() => {
  return config.public.microsoftFormsUrl as string;
});
onMounted(() => {
  window.location.href = redirectUrl.value;
});
</script>
