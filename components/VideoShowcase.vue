<template>
  <section class="bg-primary-dark text-white py-16 px-6 md:px-16">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-accent-blue mb-8">
        See Us in Action
      </h2>

      <div
        class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg mb-6"
      >
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="DIT Showcase Video"
          frameborder="0"
          allowfullscreen
        />
      </div>

      <p class="text-light-blue max-w-3xl mx-auto text-lg">
        Watch our students collaborate on exciting tech projects, learn from
        passionate mentors, and build skills that will shape the future.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Ensure proper responsive iframe scaling using aspect ratio (for older Tailwind versions) */
.aspect-w-16 {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
.aspect-w-16 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
