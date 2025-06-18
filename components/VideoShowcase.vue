<template>
  <section class="bg-primary-dark text-white py-16 px-6 md:px-16">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-accent-blue mb-8">
        See Us in Action
      </h2>

      <div
        class="aspect-video rounded-xl overflow-hidden shadow-lg mb-6 relative"
      >
        <video
          :src="videoUrl"
          class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-100': videoLoaded, 'opacity-0': !videoLoaded }"
          controls
          muted
          playsinline
          @canplay="onVideoLoad"
        ></video>
      </div>

      <p class="text-light-blue max-w-3xl mx-auto text-lg">
        Watch our students collaborate on exciting tech projects, learn from
        passionate mentors, and build skills that will shape the future.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import videoUrl from "@/assets/video/dit_welcome_video.mp4";

const videoLoaded = ref(false);

const onVideoLoad = () => {
  console.log("Video ready to play");
  videoLoaded.value = true;
};
</script>
