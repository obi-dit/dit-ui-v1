<template>
  <div
    class="flex flex-col bg-primary items-center justify-center min-h-screen px-4 py-12 text-center bg-gray-50"
  >
    <div class="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <div class="text-green-500 text-5xl mb-4">
        <Icon name="mdi:check-circle" />
      </div>
      <h1 class="text-2xl text-primary font-bold mb-2">
        Enrollment Successful
      </h1>
      <p class="text-gray-600 mb-6">
        You have successfully enrolled in <strong>{{ courseName }}</strong
        >. You can now start learning right away.
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// Optional: You can pass the course name through a query param like ?course=Fullstack
const courseName = computed(() => route.query.course || "your course");
</script>
