<template>
  <section class="bg-primary py-20 px-6 md:px-16 text-white">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >
        Testimonials / Student Stories
      </h2>

      <div class="flex gap-6 overflow-x-auto no-scrollbar pb-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="min-w-[300px] bg-gray-100 text-primary p-6 rounded-2xl shadow-lg flex-shrink-0 relative"
        >
          <div class="absolute -top-4 left-4 text-accent-blue text-3xl top-2">
            <Icon name="mdi:format-quote-open" />
          </div>

          <div class="flex justify-center mb-4">
            <img
              v-if="testimonial.image"
              :src="testimonial.image"
              :alt="testimonial.name"
              class="w-20 h-20 object-cover rounded-full border-4 border-accent-blue"
            />
            <initials-circle
              v-else
              class="mb-2"
              width="60"
              height="60"
              :initials="testimonial.name"
            />
          </div>

          <h3 class="text-lg font-semibold text-center">
            {{ testimonial.name }},
            <span class="text-sm text-gray-500">{{ testimonial.age }} yrs</span>
          </h3>

          <p class="mt-3 text-center text-sm italic text-gray-700">
            “{{ testimonial.quote }}”
          </p>

          <div class="mt-4 flex justify-center">
            <Icon
              v-for="i in 5"
              :key="i"
              name="mdi:star"
              class="text-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Amara",
    age: 15,
    quote: "DIT helped me discover my passion for AI!",
    image: null,
  },
  {
    name: "Jayden",
    age: 14,
    quote: "I built my first website thanks to my mentor!",
    image: null,
  },
  {
    name: "Fatima",
    age: 16,
    quote: "I love how DIT makes tech fun and easy to learn.",
    image: null,
  },
  {
    name: "Michael",
    age: 17,
    quote: "The projects at DIT helped me build real-world skills.",
    image: null,
  },
];
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
