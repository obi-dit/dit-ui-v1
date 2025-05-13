<template>
  <div
    class="pages entry index text-white min-h-screen font-sans overflow-hidden overflow-y-auto"
  >
    <MainNavbar class="sticky z-50 bg-primary top-0" />
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Program Overview Section -->
      <ProgramOverview />
      <!-- Program Highlights Section -->

      <WhyChooseUs />

      <!-- Video Section -->
      <VideoShowcase />

      <Testimonials />

      <Footer />
    </div>
  </div>
</template>
<style lang="scss">
.pages.entry.index {
  height: calc(100vh - 100px);
}
</style>
