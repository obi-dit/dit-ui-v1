<template>
  <section class="text-primary pages entry about">
    <div class="max-w-6xl mx-auto py-16 px-6 md:px-16">
      <!-- Header -->
      <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        About Diversity in Technology
      </h1>
      <p class="text-lg text-center text-white mb-12 max-w-3xl mx-auto">
        Empowering the next generation of innovators through engaging, hands-on
        learning in technology.
      </p>

      <!-- Mission Section -->
      <div class="mb-16 flex flex-col md:flex-row gap-10 items-center">
        <img
          src="assets/webp/about-mission.webp"
          alt="Students learning tech"
          class="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
        />
        <div class="md:w-1/2">
          <h2 class="text-2xl font-semibold text-accent-blue mb-4">
            Our Mission
          </h2>
          <p class="text-white text-lg leading-relaxed">
            At DIT, our mission is to make technology education accessible, fun,
            and meaningful for students aged 12 to 17. We believe that every
            young mind deserves the opportunity to explore fields like
            Artificial Intelligence, Web Development, and Digital Media in a
            supportive and inclusive environment.
          </p>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold text-white mb-6 text-center">
          Our Core Values
        </h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="bg-accent-blue text-white p-6 rounded-xl shadow">
            <Icon
              name="mdi:lightbulb-on-outline"
              class="text-4xl mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Innovation</h3>
            <p>
              We inspire creative thinking through cutting-edge tech projects
              and problem-solving.
            </p>
          </div>
          <div class="bg-accent-blue text-white p-6 rounded-xl shadow">
            <Icon
              name="mdi:account-group-outline"
              class="text-4xl mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Inclusivity</h3>
            <p>
              DIT welcomes students from all backgrounds and encourages a
              diverse community.
            </p>
          </div>
          <div class="bg-accent-blue text-white p-6 rounded-xl shadow">
            <Icon
              name="mdi:teach"
              class="text-4xl mb-4"
            />
            <h3 class="text-xl font-bold mb-2">Mentorship</h3>
            <p>
              Learn directly from tech professionals who guide and support
              student growth.
            </p>
          </div>
        </div>
      </div>

      <StatsCounter />

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <h2 class="text-2xl font-bold mb-4 text-white">
          Ready to Begin Your Tech Journey?
        </h2>
        <NuxtLink
          to="/programs"
          class="inline-block bg-secondary text-white py-3 px-6 rounded-lg hover:bg-light-blue transition"
        >
          Explore Our Programs
        </NuxtLink>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.pages.entry.about {
  height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: auto;
}
</style>
