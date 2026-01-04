<template>
  <section class="text-primary pages entry student-support-team-page">
    <div class="support-team-container">
      <h1>Meet Your DIT Student Technologist</h1>
      <div class="subtitle">
        These are the people you and your family will interact with the most
        during your training journey.
      </div>

      <div class="grid">
        <div class="card">
          <div class="avatar">
            <span>{{ getInitials("Open Position", "OP") }}</span>
          </div>
          <div class="name">Open Position</div>
          <div class="title">R&D Student Technologist-intern</div>
          <div class="bio">
            Join our Research & Development team as a Student
            Technologist-intern. Help drive innovation and support cutting-edge
            technology training initiatives.
          </div>
          <div class="open-slots">33 Open Slots</div>
        </div>

        <div class="card">
          <div class="avatar">
            <span>{{ getInitials("Open Position", "OP") }}</span>
          </div>
          <div class="name">Open Position</div>
          <div class="title">R&D Student Research Technologist</div>
          <div class="bio">
            Join our Research & Development team as a Student Research
            Technologist. Contribute to research projects and technology
            development.
          </div>
          <div class="open-slots">33 Open Slots</div>
        </div>

        <div class="card">
          <div class="avatar">
            <span>{{ getInitials("Open Position", "OP") }}</span>
          </div>
          <div class="name">Open Position</div>
          <div class="title">Sr. Student Research Technologist</div>
          <div class="bio">
            Join our Research & Development team as a Senior Student Research
            Technologist. Lead research initiatives and mentor junior team
            members.
          </div>
          <div class="open-slots">33 Open Slots</div>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import abdulImage from "@/assets/pngs/Abdul-Ganiw.png";
import vanessaImage from "@/assets/pngs/Vanessa.png";
import obiImage from "@/assets/pngs/Obi.png";
import marieImage from "@/assets/pngs/Marie.png";
import babatundeImage from "@/assets/pngs/Babatunde.png";
import dayrl from "@/assets/pngs/Daryl.png";
useHead({
  title: "Meet Your DIT Support Team",
});

// Map team members to their avatar images
const avatarImages: Record<string, string> = {
  Abdul: abdulImage,
  Vanessa: vanessaImage,
  Obi: obiImage,
  Marie: marieImage,
  Babatunde: babatundeImage,
  Daryl: dayrl,
  // Add more team members' images here as they become available
  // "Daryl Reynolds": darylImage,
  // "Vanessa": vanessaImage,
  // "Venu": venuImage,
  // "Obi": obiImage,
  // etc.
};

const getAvatarImage = (name: string): string | undefined => {
  return avatarImages[name];
};

const getInitials = (name: string, fallback: string): string => {
  if (name === "TBD" || name.includes("Team")) {
    return fallback;
  }
  const parts = name.split(" ").filter((p) => p.length > 0);
  if (parts.length >= 2) {
    const first = parts[0]?.[0];
    const last = parts[parts.length - 1]?.[0];
    if (first && last) {
      return (first + last).toUpperCase();
    }
  }
  return name.substring(0, 2).toUpperCase();
};
</script>

<style lang="scss" scoped>
.pages.entry.student-support-team-page {
  background: #002a5c;
  color: #ffffff;
  height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
}

.support-team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 16px 40px;
}

h1 {
  text-align: center;
  margin: 0 0 8px;
  font-weight: 600;
  color: #ffffff;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  color: #e0ecff;
  margin-bottom: 26px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background: #0b57d0;
  border-radius: 16px;
  padding: 18px 18px 20px;
  text-align: left;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.13);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  overflow: hidden;
  flex-shrink: 0;

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.name {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 2px;
  color: #ffffff;
}

.title {
  font-size: 12px;
  color: #e0ecff;
  margin-bottom: 8px;
}

.bio {
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: #ffffff;
}

.links {
  font-size: 12px;

  a {
    color: #ffee8a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.open-slots {
  font-size: 12px;
  color: #ffee8a;
  font-weight: 600;
  margin-top: 8px;
}

// Responsive adjustments
@media (max-width: 768px) {
  .support-team-container {
    padding: 20px 12px 30px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 12px;
    margin-bottom: 24px;
  }
}
</style>
