<template>
  <section class="text-primary pages entry organization-chart-page">
    <div class="org-chart-container">
      <h1>DIT Organizational Leadership</h1>

      <!-- Executive Leadership -->
      <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Executive Leadership</div>
          <div class="dept-note">
            Overall strategy, partnerships, and institutional direction.
          </div>
        </div>
        <div class="grid">
          <div class="card alt">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Daryl')"
                :src="getAvatarImage('Daryl')"
                :alt="'Daryl Reynolds'"
                class="avatar-img"
              />
              <span v-else>{{ getInitials("Daryl Reynolds", "DR") }}</span>
            </div>
            <div class="name">Daryl Reynolds</div>
            <div class="title">School Director / CEO</div>
            <div class="bio">
              Founder and executive leader guiding strategy, partnerships,
              growth, and student impact across all DIT programs.
            </div>
            <!-- <div class="links">
              <a
                href="mailto:darylreynolds@diversityintechnology.onmicrosoft.com"
                >Email</a
              >
              ·
              <a href="#">LinkedIn</a>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Academic & Training -->
      <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Academic & Training</div>
          <div class="dept-note">
            Curriculum, instructors, labs, and learning outcomes.
          </div>
        </div>
        <div class="grid">
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
            <div class="title">Technology Training, Content Creation, R&D</div>
            <div class="bio">
              Oversees curriculum, instructors, and teaching quality to ensure
              students gain industry-ready IT and AI skills.
            </div>
            <!-- <div class="links">
              <a href="#">Email</a> · <a href="#">LinkedIn</a>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Research & Development + Student Tech Trainers -->
      <section class="dept">
        <div class="dept-header">
          <div class="dept-title">
            Research & Development + Student Technology Trainers
          </div>
          <div class="dept-note">
            Innovation, pilots, and student-led technology delivery.
          </div>
        </div>
        <div class="grid">
          <div class="card alt">
            <div class="dotted">Dotted-line to: Academic Director</div>
            <div class="avatar">
              <img
                v-if="getAvatarImage('Abdul')"
                :src="getAvatarImage('Abdul')"
                alt="Abdul"
                class="avatar-img"
              />
              <span v-else>AB</span>
            </div>
            <div class="name">Abdul</div>
            <div class="title">Technology Training  Supervisor</div>
            <div class="bio">
              Leads AI innovation, workforce research, and development of new
              student-driven technology training models and pilots.
            </div>
            <!-- <div class="links">
              <a href="#">Email</a> · <a href="#">LinkedIn</a>
            </div> -->
          </div>

          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Marie')"
                :src="getAvatarImage('Marie')"
                alt="Technology Training Supervisor"
                class="avatar-img"
              />
              <span v-else>ST</span>
            </div>
            <div class="name">Marie Ysulat</div>
            <div class="title">
              Technology Training, Content Creation and R&D
            </div>
            <div class="bio">
              Supervises student technology trainers, manages lab schedules, and
              ensures training equipment is in good working order to support
              student learning.
            </div>
          </div>
        </div>
      </section>

      <!-- Student Services -->

      <!-- Technology & IT Support -->
      <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Technology &amp; IT Support</div>
          <div class="dept-note">Systems, platforms, and Networking.</div>
        </div>
        <div class="grid">
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Babatunde')"
                :src="getAvatarImage('Babatunde')"
                alt="Babatunde"
                class="avatar-img"
              />
              <span v-else>BO</span>
            </div>
            <div class="name">Babatunde Ogedengbe</div>
            <div class="title">Lead Systems and Network Engineer</div>
            <div class="bio">
              Maintains core technology platforms, networking, and virtual lab
              access used across all DIT training programs.
            </div>
          </div>
        </div>
      </section>

      <!-- Tech and Engineering -->
      <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Tech and Engineering</div>
          <div class="dept-note">
            Software development, engineering, and technical architecture.
          </div>
        </div>
        <div class="grid">
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Obi')"
                :src="getAvatarImage('Obi')"
                alt="Obi"
                class="avatar-img"
              />
              <span v-else>{{ getInitials("Obi Uche", "OU") }}</span>
            </div>
            <div class="name">Obi Uche</div>
            <div class="title">Lead  Software and Web Developer Engineer</div>
            <div class="bio">
              Leads software development initiatives, technical architecture,
              and engineering best practices across DIT's technology platforms
              and systems.
            </div>
            <!-- <div class="links">
              <a href="#">Email</a> · <a href="#">LinkedIn</a>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Marketing & Outreach -->
      <!-- <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Marketing &amp; Community Outreach</div>
          <div class="dept-note">Brand, content, and partner engagement.</div>
        </div>
        <div class="grid">
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Marketing Director')"
                :src="getAvatarImage('Marketing Director')"
                alt="Marketing Director"
                class="avatar-img"
              />
              <span v-else>MK</span>
            </div>
            <div class="name">TBD</div>
            <div class="title">Marketing Director</div>
            <div class="bio">
              Oversees DIT's brand voice, campaigns, and messaging to students,
              partners, and the broader community.
            </div>
          </div>
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Digital Media Lead')"
                :src="getAvatarImage('Digital Media Lead')"
                alt="Digital Media Lead"
                class="avatar-img"
              />
              <span v-else>DM</span>
            </div>
            <div class="name">TBD</div>
            <div class="title">Digital Media Lead</div>
            <div class="bio">
              Manages content production for DIT Digital Studios, social
              channels, and program marketing initiatives.
            </div>
          </div>
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Community Manager')"
                :src="getAvatarImage('Community Manager')"
                alt="Community Manager"
                class="avatar-img"
              />
              <span v-else>CM</span>
            </div>
            <div class="name">TBD</div>
            <div class="title">Community Manager</div>
            <div class="bio">
              Builds relationships with Urban League partners, schools, and
              community organizations to support student recruitment.
            </div>
          </div>
        </div>
      </section> -->

      <!-- Finance & Compliance -->
      <!-- <section class="dept">
        <div class="dept-header">
          <div class="dept-title">Finance &amp; Compliance</div>
          <div class="dept-note">Fiscal stewardship and audit readiness.</div>
        </div>
        <div class="grid">
          <div class="card">
            <div class="avatar">
              <img
                v-if="getAvatarImage('Finance Compliance Coordinator')"
                :src="getAvatarImage('Finance Compliance Coordinator')"
                alt="Finance Compliance Coordinator"
                class="avatar-img"
              />
              <span v-else>FN</span>
            </div>
            <div class="name">TBD</div>
            <div class="title">Finance &amp; Compliance Coordinator</div>
            <div class="bio">
              Ensures accurate financial reporting, grant documentation, and
              alignment with workforce and education compliance requirements.
            </div>
          </div>
        </div>
      </section> -->

      <!-- <div class="legend">
        Dotted-line notes indicate cross-department collaboration in addition to
        formal reporting lines.
      </div> -->
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import abdulImage from "@/assets/pngs/Abdul-Ganiw.png";
import marieImage from "@/assets/pngs/Marie.png";
import vanessaImage from "@/assets/pngs/Vanessa.png";
import babatundeImage from "@/assets/pngs/Babatunde.png";
import obiImage from "@/assets/pngs/Obi.png";
import daryl from "@/assets/pngs/Daryl.png";

useHead({
  title: "DIT Org Chart - Leadership & Departments",
});

// Map team members to their avatar images
const avatarImages: Record<string, string> = {
  Abdul: abdulImage,
  Marie: marieImage,
  Vanessa: vanessaImage,
  Babatunde: babatundeImage,
  Obi: obiImage,
  Daryl: daryl,
  // Add more team members' images here as they become available
  // "Daryl Reynolds": darylImage,
  // "Vanessa": vanessaImage,
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
.pages.entry.organization-chart-page {
  color: #ffffff;
  height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
}

.org-chart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 16px 40px;
}

h1,
h2,
h3 {
  margin: 0 0 10px;
  font-weight: 600;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #ffffff;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  color: #e0ecff;
  margin-bottom: 30px;
}

.dept {
  max-width: 1150px;
  margin: 0 auto 28px;
  padding: 18px 18px 22px;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.dept-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 14px;
}

.dept-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.dept-note {
  font-size: 11px;
  color: #e0ecff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.card {
  background: #0b57d0;
  border-radius: 16px;
  padding: 16px 16px 18px;
  text-align: left;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
  position: relative;

  &.alt {
    background: #0a4bb5;
  }
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
  font-size: 14px;
  margin-bottom: 2px;
  color: #ffffff;
}

.title {
  font-size: 12px;
  color: #e0ecff;
  margin-bottom: 8px;
}

.bio {
  font-size: 11px;
  line-height: 1.45;
  margin-bottom: 8px;
  color: #ffffff;
}

.links {
  font-size: 11px;

  a {
    color: #ffee8a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.dotted {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 10px;
  color: #e0ecff;
}

.legend {
  max-width: 1150px;
  margin: 10px auto 0;
  font-size: 10px;
  color: #e0ecff;
  text-align: right;
}

// Responsive adjustments
@media (max-width: 768px) {
  .org-chart-container {
    padding: 20px 12px 30px;
  }

  .dept-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 12px;
    margin-bottom: 24px;
  }
}
</style>
