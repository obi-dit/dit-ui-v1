<template>
  <div class="bg-primary text-white px-6 py-10 mt-20">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"
    >
      <!-- Logo and Tagline -->
      <div>
        <h3 class="text-2xl font-bold mb-2">DIT</h3>
        <p class="text-gray-300">
          Diversity in Technology empowers future tech leaders through
          inclusive, hands-on programs.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-lg mb-3">Quick Links</h4>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/programs" class="hover:underline">Programs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="font-semibold text-lg mb-3">Contact Us</h4>
        <p>306 South 7th Street<br />Suite 209B, Tacoma, WA 98402</p>
        <p class="mt-2">
          Email:
          <a href="mailto:info@diversityintechnology.org" class="underline"
            >info@diversityintechnology.org</a
          >
        </p>
      </div>

      <!-- Social Media -->
      <div>
        <h4 class="font-semibold text-lg mb-3">Connect with Us</h4>
        <div class="flex space-x-4 mt-2">
          <a
            href="https://www.facebook.com/share/1Ashciedb7/?mibextid=wwXIfr"
            aria-label="Facebook"
            class="hover:text-secondary"
          >
            <i class="fab fa-facebook-f" />
          </a>
          <a
            href="https://x.com/ditech2020"
            aria-label="Twitter"
            class="hover:text-secondary"
          >
            <i class="fab fa-twitter" />
          </a>
          <!-- <a href="#" aria-label="LinkedIn" class="hover:text-secondary">
            <i class="fab fa-linkedin-in" />
          </a> -->
          <a
            href="https://www.instagram.com/diversityintechnology2020?igsh=cWVqeGpyd2c4Yjhh&utm_source=qr"
            aria-label="Instagram"
            class="hover:text-secondary"
          >
            <i class="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="border-t border-white border-opacity-10 mt-10 pt-4 text-center text-xs text-gray-400"
    >
      &copy; {{ new Date().getFullYear() }} Diversity In Technology. All rights
      reserved.
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Import Font Awesome icons if needed */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
