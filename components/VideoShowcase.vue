<template>
  <section class="bg-primary-dark text-white py-16 px-6 md:px-16">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-accent-blue mb-8">
        See Us in Action
      </h2>

      <div
        class="aspect-video rounded-xl overflow-hidden shadow-lg mb-6 relative"
      >
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dy4yhk3im&public_id=MicrosoftTeams-video_cxqckk&profile=cld-default"
          width="640"
          height="360"
          style="height: auto; width: 100%; aspect-ratio: 640 / 360"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
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
import videoUrl from "@/assets/video/hero.mp4";

const videoLoaded = ref(false);

const onVideoLoad = () => {
  console.log("Video ready to play");
  videoLoaded.value = true;
};
</script>
