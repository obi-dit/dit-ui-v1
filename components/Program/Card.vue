<template>
  <div class="bg-white rounded-xl shadow-md p-6">
    <!-- Media Preview -->
    <div class="mb-4 rounded-lg overflow-hidden aspect-video relative">
      <!-- Fallback Image -->
      <!-- <img
        :src="image"
        alt="Program preview"
        :class="[
          'absolute top-0 left-0 w-full h-full object-cover transition-all duration-500',
          videoUrl ? (videoLoaded ? 'blur-0' : 'blur-sm') : '',
        ]"
      /> -->

      <!-- Native Video -->
      <!-- <video
        class="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
        @loadeddata="onVideoLoad"
        controls
        muted
        playsinline
      >
        <source :src="videoUrl" type="video/mp4" />

        Your browser does not support the video tag.
      </video> -->
      <iframe
        :src="videoUrl"
        width="640"
        height="360"
        style="height: auto; width: 100%; aspect-ratio: 640 / 360"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </div>

    <!-- Program Text Info -->
    <h3 class="text-xl font-semibold text-primary mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-600 mb-2">Total Cost: {{ totalCost }}</p>

    <p class="text-base text-secondary font-bold mb-2">
      ${{ installmentFee }}
      <span class="text-sm text-gray-500 font-normal">/ installment</span>
    </p>

    <!-- Caption -->
    <p v-if="caption" class="text-gray-700 text-sm italic mb-2">
      “{{ caption }}”
    </p>

    <!-- Summary -->
    <p v-if="summary" class="text-gray-600 text-sm mb-4">{{ summary }}</p>

    <!-- CTA -->
    <button
      class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md w-full"
      @click.prevent="gotoToEnrollPage"
    >
      Enroll Now
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  image: String,
  installmentFee: Number,
  totalCost: String,
  videoUrl: String,
  summary: String,
  caption: String,
});

const videoLoaded = ref(false);
console.log("log", props.videoUrl);
const onVideoLoad = () => {
  videoLoaded.value = true;
};

const gotoToEnrollPage = () => {
  navigateTo("/programs/enroll");
};
</script>
