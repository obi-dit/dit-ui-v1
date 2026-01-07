<template>
  <section class="bg-primary py-20 px-6 md:px-16 text-white">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-accent-blue mb-10 text-center"
      >
        Testimonials / Student Stories
      </h2>

      <div class="relative">
        <!-- Left Arrow -->
        <button
          v-if="showLeftArrow"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-accent-blue hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-80 hover:opacity-100"
          @click="scrollLeft"
          aria-label="Scroll left"
        >
          <Icon name="mdi:chevron-left" class="text-2xl" />
        </button>

        <!-- Testimonials Container -->
        <div
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth"
          @scroll="updateArrowVisibility"
        >
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
              "{{ testimonial.quote }}"
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

        <!-- Right Arrow -->
        <button
          v-if="showRightArrow"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-accent-blue hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 opacity-80 hover:opacity-100"
          @click="scrollRight"
          aria-label="Scroll right"
        >
          <Icon name="mdi:chevron-right" class="text-2xl" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const scrollContainer = ref<HTMLElement | null>(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(true);

const testimonials = [
  {
    name: "Abdoulaye Fall",
    age: 29,
    quote:
      "DIT helped me transition into a tech career. The hands-on training and real-world projects prepared me for success in the IT industry.",
    image: null,
  },
  {
    name: "Christina Howard",
    age: 28,
    quote:
      "The mentorship and support at DIT made all the difference. I gained confidence and skills that opened doors to new opportunities.",
    image: null,
  },
  {
    name: "Jaquille Baird",
    age: 24,
    quote:
      "He completed the Helpdesk Support program 90 days ago and got a 74K Helpdesk Job offer. He currently works there now.",
    image: null,
  },
  {
    name: "Sabria Walls",
    age: 23,
    quote:
      "DIT's programs are practical and relevant. The instructors really care about your success and help you every step of the way.",
    image: null,
  },
];

const scrollLeft = () => {
  if (scrollContainer.value) {
    const scrollAmount = 320; // 300px card width + 20px gap
    scrollContainer.value.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    const scrollAmount = 320; // 300px card width + 20px gap
    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

const updateArrowVisibility = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
    showLeftArrow.value = scrollLeft > 0;
    showRightArrow.value = scrollLeft < scrollWidth - clientWidth - 10; // 10px threshold
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    updateArrowVisibility();
    scrollContainer.value.addEventListener("scroll", updateArrowVisibility);
    // Also check on resize
    window.addEventListener("resize", updateArrowVisibility);
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", updateArrowVisibility);
    window.removeEventListener("resize", updateArrowVisibility);
  }
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

/* Hide arrows on very small screens */
@media (max-width: 640px) {
  button[aria-label="Scroll left"],
  button[aria-label="Scroll right"] {
    display: none;
  }
}
</style>
