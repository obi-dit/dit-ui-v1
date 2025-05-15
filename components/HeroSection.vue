<template>
  <section class="bg-primary text-white px-8 py-16">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <!-- Left Column -->
      <div class="text-center md:text-left md:w-1/2">
        <h1 class="text-4xl font-bold text-accent-orange mb-4">
          Welcome to Diversity in Technology
        </h1>
        <p class="text-light-blue text-lg mb-6">
          Empowering Future Technologists in AI, IT & Digital Media
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        >
          <button
            class="bg-accent-blue hover:bg-secondary text-white py-2 px-6 rounded cursor-pointer"
          >
            Join a Program
          </button>
          <UModal
            title="Watch our introductory video"
            description="Diversityintechnology aims in providing excellent mentorship and tech trainings"
            :ui="{
              content: '!w-full max-w-[800px] ',
            }"
          >
            <UButton
              label="Watch Welcome"
              color="neutral"
              variant="subtle"
              class="border border-light-blue text-white py-2 px-6 rounded hover:bg-[#85b4ff] hover:text-[#001244] cursor-pointer bg-transparent"
            />

            <template #body>
              <div>
                <video autoplay>
                  <source
                    src="~/assets/video/dit_welcome_video.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>
              </div>
            </template>
          </UModal>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:w-1/2">
        <img
          src="~assets/pngs/superhero.png"
          alt="Diversity in Tech"
          class="w-full h-[500px] object-cover object-top rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed
</script>
