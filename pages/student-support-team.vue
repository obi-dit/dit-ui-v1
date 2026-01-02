<template>
  <section class="text-primary pages entry student-support-team-page">
    <div class="support-team-container">
      <h1>Meet Your DIT Support Team</h1>
      <div class="subtitle">
        These are the people you and your family will interact with the most
        during your training journey.
      </div>

      <div class="grid">
        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Daryl Reynolds')"
              :src="getAvatarImage('Daryl Reynolds')"
              alt="Daryl Reynolds"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Daryl Reynolds", "DR") }}</span>
          </div>
          <div class="name">Daryl Reynolds</div>
          <div class="title">School Director / CEO</div>
          <div class="bio">
            Daryl leads the school and makes sure DIT programs are designed to
            open real technology career doors for you.
          </div>
          <div class="links">
            <a href="mailto:daryl@diversityintechnology.org">Email Daryl</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Vanessa')"
              :src="getAvatarImage('Vanessa')"
              alt="Vanessa"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Vanessa", "VA") }}</span>
          </div>
          <div class="name">Vanessa</div>
          <div class="title">Academic Director</div>
          <div class="bio">
            Vanessa oversees your classes, instructors, and curriculum to keep
            your learning experience high-quality and engaging.
          </div>
          <div class="links">
            <a href="mailto:vanessamartinez@diversityintechnology.org"
              >Email Vanessa</a
            >
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Abdul')"
              :src="getAvatarImage('Abdul')"
              alt="Abdul-Ganiw"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Abdul-Ganiw", "AG") }}</span>
          </div>
          <div class="name">Abdul-Ganiw</div>
          <div class="title">Senior Technology Trainer</div>
          <div class="bio">
            Abdul-Ganiw leads the student technology trainers who help you in
            labs, practice helpdesk skills, and complete projects.
          </div>
          <div class="links">
            <a href="mailto:abdul@diversityintechnology.org">Email Abdul</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Marie')"
              :src="getAvatarImage('Marie')"
              alt="Marie"
              class="avatar-img"
            />
          </div>
          <div class="name">Marie</div>
          <div class="title">Senior Technology Trainer</div>
          <div class="bio">
            Marie is the senior technology trainer for the DIT school. She is
            responsible for the development of the DIT school's software
            applications.
          </div>
          <div class="links">
            <a href="mailto:marie@diversityintechnology.org">Email Marie</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Venu')"
              :src="getAvatarImage('Venu')"
              alt="Venu"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Diana Rose", "DR") }}</span>
          </div>
          <div class="name">Diana Rose</div>
          <div class="title">AI Executive Coordinator</div>
          <div class="bio">
            Diana is the AI executive coordinator for the DIT school. She is
            responsible for the coordination of the AI program.
          </div>
          <div class="links">
            <a href="mailto:dianarose@diversityintechnology.org"
              >Email Diana Rose</a
            >
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Babatunde')"
              :src="getAvatarImage('Babatunde')"
              alt="Babatunde"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Babatunde", "BO") }}</span>
          </div>
          <div class="name">Babatunde Ogedenghe</div>
          <div class="title">Senior System Administrator</div>
          <div class="bio">
            Babatunde is the senior system administrator for the DIT school. He
            is responsible for the management of the DIT school's systems and
            infrastructure.
          </div>
          <div class="links">
            <a href="mailto:babatunde@diversityintechnology.org"
              >Email Babatunde</a
            >
          </div>
        </div>

        <div class="card">
          <div class="avatar">
            <img
              v-if="getAvatarImage('Obi')"
              :src="getAvatarImage('Obi')"
              alt="Obi"
              class="avatar-img"
            />
            <span v-else>{{ getInitials("Obi", "OB") }}</span>
          </div>
          <div class="name">Obi</div>
          <div class="title">Lead Software Engineer</div>
          <div class="bio">
            Obi is the lead software engineer for the DIT school. He is
            responsible for the development of the DIT school's software
            applications.
          </div>
          <div class="links">
            <a href="mailto:obi@diversityintechnology.org">Contact Obi</a>
          </div>
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
