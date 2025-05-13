<template>
  <div class="bg-white rounded-xl shadow-md p-6">
    <img
      :src="image"
      alt="Program Image"
      class="w-full object-cover rounded-lg mb-4"
    />

    <h3 class="text-xl font-semibold text-primary mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-600 mb-2">Total Cost: {{ totalCost }}</p>

    <p class="text-base text-secondary font-bold mb-4">
      ${{ installmentFee }}
      <span class="text-sm text-gray-500 font-normal">/ installment</span>
    </p>

    <button
      class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md w-full"
    >
      Enroll Now
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  image: String,
  installmentFee: Number,
  totalCost: String,
});
</script>
