<template>
  <section
    class="pages entry programs bg-primary text-primary px-6 md:px-16 overflow-hidden overflow-y-auto"
  >
    <div class="max-w-7xl mx-auto mt-12">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our Training Programs
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-white">
          Empowering Future Tech Leaders — Ages 14 to 25+
        </p>
        <p class="text-gray-500 mt-2 text-white">
          At Diversity In Technology (DIT), we deliver career-ready training
          programs that open the door to high-paying jobs in IT and AI — without
          requiring a college degree.
        </p>
        <p class="text-gray-500 mt-2 text-white">
          Programs are available online funded by WIOA grants, Urban League
          partnerships, or private sponsorships in VA, MD, and WA.
        </p>
      </div>

      <!-- Program Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProgramCard
          v-for="(program, index) in programs"
          v-bind="program"
          :key="index"
        />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script setup lang="ts">
import aiEssentials from "@/assets/webp/ai-essentials.webp";
import itFundamentals from "@/assets/webp/it-fundamentals.webp";
import helpdeskSupport from "@/assets/webp/helpdesk-support.webp";

const programs = [
  {
    icon: "🤖",
    title: "AI Essentials Program",
    category: "IT",
    installmentFee: 250,
    totalCost: "$8,500",
    image: aiEssentials,
  },
  {
    icon: "🧠",
    title: "IT Fundamentals Program",
    category: "IT",
    installmentFee: 250,
    totalCost: "$6,500",
    image: itFundamentals,
  },
  {
    icon: "🧰",
    title: "Helpdesk Support Program",
    category: "IT",
    installmentFee: 250,
    totalCost: "$6,500",
    image: helpdeskSupport,
  },
];
</script>
<style lang="scss" scoped>
.pages.entry.programs {
  height: calc(100vh - 100px);
}
</style>
