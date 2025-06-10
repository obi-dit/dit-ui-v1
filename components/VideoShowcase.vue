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
          src="https://diversityintechnology-my.sharepoint.com/personal/darylreynolds_diversityintechnology_org/_layouts/15/embed.aspx?UniqueId=0df19b8c-fe78-473c-8987-ef52bba2e4b4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
          width="640"
          height="360"
          frameborder="0"
          scrolling="no"
          allowfullscreen
          title="DIT TECH WELCOME VIDEO.mp4"
        ></iframe>
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
