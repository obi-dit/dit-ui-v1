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
import aiEssentials from "@/assets/pngs/ai-image.png";
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
    caption:
      "Explore how students use AI tools to create, innovate, and solve real-world problems.",
    summary:
      "The AI Essentials Program introduces students to artificial intelligence through hands-on projects like music generation, content creation, and chatbot design. It’s tailored for learners ages 14–17 and builds foundational skills in prompt engineering, data literacy, and responsible AI use. Students leave with both creative portfolios and essential digital credentials.",
    videoUrl:
      "https://diversityintechnology-my.sharepoint.com/personal/darylreynolds_diversityintechnology_org/_layouts/15/embed.aspx?UniqueId=8332ac57-389f-4352-a807-08432257c9ba&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
  },
  {
    icon: "🧠",
    title: "IT Fundamentals Program",
    category: "IT",
    installmentFee: 250,
    totalCost: "$6,500",
    image: itFundamentals,
    caption:
      "Step inside our beginner-friendly course that builds real hardware and networking skills.",
    summary:
      "Our IT Fundamentals Program offers an interactive introduction to computer hardware, operating systems, and basic networking concepts. Students build and troubleshoot real machines, gaining confidence through project-based learning. Ideal for ages 14–17, this course provides a strong entry point for further IT training or certifications.",
    videoUrl:
      "https://diversityintechnology-my.sharepoint.com/personal/darylreynolds_diversityintechnology_org/_layouts/15/embed.aspx?UniqueId=8c155b1c-0033-46ad-81d4-953eb6587f7b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
  },
  {
    icon: "🧰",
    title: "Helpdesk Support Program",
    category: "IT",
    installmentFee: 250,
    totalCost: "$6,500",
    image: helpdeskSupport,
    caption:
      "Get a behind-the-scenes look at how students prepare for IT support roles.",
    summary:
      "The Helpdesk Support Program trains students (18+) for Tier 1 IT roles using real-life ticketing scenarios and troubleshooting tools. Learners develop communication, diagnostic, and remote support skills necessary for entry-level tech jobs. Graduates are prepared to interview for MSP positions or pursue CompTIA certifications.",
    videoUrl:
      "https://diversityintechnology-my.sharepoint.com/personal/darylreynolds_diversityintechnology_org/_layouts/15/embed.aspx?UniqueId=72e16b7e-efa8-4076-9dae-db3af34d6253&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create",
  },
];
</script>
<style lang="scss" scoped>
.pages.entry.programs {
  height: calc(100vh - 100px);
}
</style>
