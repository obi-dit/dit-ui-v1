<template>
  <UApp :toaster="{ position: 'top-right' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
const user = useUser();

const { isLogged, isVerifiedUser } = storeToRefs(user);

watchEffect(() => {
  if (isLogged.value && !isVerifiedUser.value) {
    navigateTo("/auth/verify");
  }

  if (isLogged.value && isVerifiedUser.value) {
    navigateTo("/dashboard");
  }
});

// user.logout();
watch(
  isLogged,
  (value) => {
    console.log("log", value);
    if (value) {
      user.getMe();
    }
  },
  {
    immediate: false,
  }
);
</script>
