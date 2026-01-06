<template>
  <section class="text-primary pages entry partners">
    <div class="partners-container">
      <h1>Our Partners</h1>
      <div class="subtitle">
        DIT collaborates with community, industry, and faith-based organizations
        to expand technology education and workforce opportunities.
      </div>

      <div class="partners-grid">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="partner-card"
        >
          <div class="partner-header">
            <span class="partner-tag" :class="getTagClass(partner.tag)">{{
              partner.tag
            }}</span>
            <h2 class="partner-name">{{ partner.name }}</h2>
            <p class="partner-type">{{ partner.type }}</p>
          </div>

          <div class="partner-content">
            <div class="partner-section">
              <h3 class="section-title">Partnership Overview</h3>
              <p class="partner-desc">{{ partner.desc }}</p>
            </div>

            <div class="partner-section">
              <h3 class="section-title">Focus Areas</h3>
              <p class="partner-focus">{{ partner.focus }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2 class="cta-title">Interested in Partnering with DIT?</h2>
        <p class="cta-text">
          We're always looking to expand our network of partners who share our
          mission of making technology education accessible to all.
        </p>
        <NuxtLink to="/contact" class="cta-button">
          Get in Touch
        </NuxtLink>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
interface Partner {
  tag: string;
  name: string;
  type: string;
  desc: string;
  focus: string;
}

useHead({
  title: "Our Partners - DIT",
});

const partners: Partner[] = [
  {
    tag: "Community Partner",
    name: "Urban League of Baltimore Maryland",
    type: "Community & Workforce Development Partner",
    desc:
      "The Urban League of Baltimore supports DIT in expanding AI and IT workforce " +
      "readiness programs for youth and young adults, focused on low-income and " +
      "historically underrepresented communities.",
    focus:
      "WIOA youth training, AI Essentials cohorts, Helpdesk Support pathways, " +
      "community outreach and recruitment.",
  },
  {
    tag: "Industry Partner",
    name: "3i Premier MSP – Wyom",
    type: "Managed Service Provider (MSP) & Hiring Partner",
    desc:
      "3i Premier MSP partners with DIT to connect program completers to real-world IT " +
      "and AI roles, providing a direct pipeline from training to employment in " +
      "helpdesk, systems administration, and AI-assisted support.",
    focus:
      "Work-based learning, part-time placements, helpdesk and SysAdmin roles, " +
      "long-term workforce pipelines for DIT graduates.",
  },
  {
    tag: "Faith-Based Partner",
    name: "The Ministries of Harvest Moon",
    type: "Faith-Based & Humanitarian Partner",
    desc:
      "The Ministries of Harvest Moon works with DIT to align technology education with " +
      "faith-based outreach, humanitarian initiatives, and global missions that center " +
      "equity, dignity, and opportunity.",
    focus:
      "Digital inclusion, global outreach, education and ministry integration, " +
      "technology access for underserved communities.",
  },
];

const getTagClass = (tag: string): string => {
  const tagMap: Record<string, string> = {
    "Community Partner": "tag-community",
    "Industry Partner": "tag-industry",
    "Faith-Based Partner": "tag-faith",
  };
  return tagMap[tag] || "";
};
</script>

<style lang="scss" scoped>
.pages.entry.partners {
  background: #002a5c;
  color: #ffffff;
  min-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 0;
}

.partners-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 16px 40px;
}

h1 {
  text-align: center;
  margin: 0 0 8px;
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #e0ecff;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 50px;
}

.partner-card {
  background: #0b57d0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
}

.partner-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.partner-tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;

  &.tag-community {
    background: #1f6fff;
    color: #ffffff;
  }

  &.tag-industry {
    background: #db6400;
    color: #ffffff;
  }

  &.tag-faith {
    background: #85b4ff;
    color: #002a5c;
  }
}

.partner-name {
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px;
}

.partner-type {
  font-size: 13px;
  color: #e0ecff;
  margin: 0;
}

.partner-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.partner-section {
  flex: 1;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #ffee8a;
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.partner-desc,
.partner-focus {
  font-size: 14px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
}

.partner-focus {
  color: #e0ecff;
}

.cta-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 40px 24px;
  text-align: center;
  margin-top: 40px;
}

.cta-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 12px;
}

.cta-text {
  font-size: 15px;
  color: #e0ecff;
  margin: 0 0 24px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  background: #0b57d0;
  color: #ffffff;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #0a4bb5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .partners-container {
    padding: 20px 12px 30px;
  }

  h1 {
    font-size: 24px;
  }

  .subtitle {
    font-size: 13px;
    margin-bottom: 30px;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .partner-card {
    padding: 20px;
  }

  .partner-name {
    font-size: 20px;
  }

  .cta-section {
    padding: 30px 20px;
  }

  .cta-title {
    font-size: 20px;
  }
}
</style>

