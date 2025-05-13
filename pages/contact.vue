<template>
  <section
    class="pages entry contact bg-primary text-primary px-6 md:px-16 overflow-hidden overflow-y-auto"
  >
    <MainNavbar class="sticky z-50 bg-primary top-0" />
    <div class="text-center mb-12 mt-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h1>
      <p class="text-white max-w-xl mx-auto">
        Have questions or want to get in touch? We'd love to hear from you!
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <!-- Contact Form -->
      <form
        class="space-y-6 bg-gray-50 p-8 rounded-xl shadow relative"
        @submit.prevent="handleSubmit"
      >
        <transition name="fade" mode="out-in">
          <div
            v-if="success"
            key="success"
            class="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center text-green-600 text-lg font-medium rounded-xl"
          >
            <p>🎉 Message Sent Successfully!</p>
            <button
              class="mt-4 text-sm underline text-accent-blue"
              @click="success = false"
            >
              Send Another
            </button>
          </div>
        </transition>

        <div class="relative">
          <input
            v-model="form.name"
            type="text"
            required
            class="peer w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-accent-blue"
          />
          <label
            class="absolute left-3 top-3 text-gray-500 peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-accent-blue transition-all bg-gray-50 px-1"
          >
            Name
          </label>
        </div>

        <div class="relative">
          <input
            v-model="form.email"
            type="email"
            required
            class="peer w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-accent-blue"
          />
          <label
            class="absolute left-3 top-3 text-gray-500 peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-accent-blue transition-all bg-gray-50 px-1"
          >
            Email
          </label>
          <p v-if="!validEmail" class="text-red-500 text-sm mt-1">
            Please enter a valid email.
          </p>
        </div>

        <div class="relative">
          <textarea
            v-model="form.message"
            rows="5"
            required
            class="peer w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-accent-blue"
          />
          <label
            class="absolute left-3 top-3 text-gray-500 peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-accent-blue transition-all bg-gray-50 px-1"
          >
            Message
          </label>
        </div>

        <button
          :disabled="!form.name || !validEmail || !form.message"
          type="submit"
          class="bg-accent-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
        >
          Send Message
        </button>
      </form>

      <!-- Contact Info -->
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-semibold mb-2 text-white">Our Address</h3>
          <p class="text-white">
            306 South 7th Street<br />
            Suite 209B<br />
            Tacoma, WA 98402
          </p>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2 text-white">Email</h3>
          <p>
            <a
              href="mailto:info@diversityintechnology.org"
              class="text-white hover:underline"
            >
              info@diversityintechnology.org
            </a>
          </p>
        </div>

        <div class="rounded-lg overflow-hidden shadow-md h-64">
          <iframe
            class="w-full h-full"
            src="https://maps.google.com/maps?q=306%20S%207th%20St%2C%20Tacoma%2C%20WA%2098402&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const success = ref(false);

const validEmail = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)
);

function handleSubmit() {
  success.value = true;
  setTimeout(() => {
    form.value = { name: "", email: "", message: "" };
  }, 300);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.pages.entry.contact {
  height: calc(100vh - 100px);
}
</style>
