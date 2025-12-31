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
          <div class="avatar">DR</div>
          <div class="name">Daryl Reynolds</div>
          <div class="title">School Director / CEO</div>
          <div class="bio">
            Daryl leads the school and makes sure DIT programs are designed to
            open real technology career doors for you.
          </div>
          <div class="links">
            <a href="mailto:darylreynolds@diversityintechnology.onmicrosoft.com"
              >Email Daryl</a
            >
          </div>
        </div>

        <div class="card">
          <div class="avatar">VA</div>
          <div class="name">Vanessa</div>
          <div class="title">Academic Director</div>
          <div class="bio">
            Vanessa oversees your classes, instructors, and curriculum to keep
            your learning experience high-quality and engaging.
          </div>
          <div class="links">
            <a href="#">Contact Academic Team</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">VE</div>
          <div class="name">Venu</div>
          <div class="title">Student Services Coordinator</div>
          <div class="bio">
            Venu is your main contact for questions about enrollment,
            attendance, paperwork, or getting extra support.
          </div>
          <div class="links">
            <a href="#">Email Student Services</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">OB</div>
          <div class="name">Obi</div>
          <div class="title">Student Tech Trainer Lead</div>
          <div class="bio">
            Obi leads the student technology trainers who help you in labs,
            practice helpdesk skills, and complete projects.
          </div>
          <div class="links">
            <a href="#">Ask for Tech Help</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">ST</div>
          <div class="name">Student Tech Trainers</div>
          <div class="title">Peer Technology Support</div>
          <div class="bio">
            This student team helps you with basic tech questions, ticketing
            practice, and building confidence in real IT workflows.
          </div>
          <div class="links">
            <a href="#">Learn about the program</a>
          </div>
        </div>

        <div class="card">
          <div class="avatar">IT</div>
          <div class="name">IT Support Team</div>
          <div class="title">Systems &amp; Platforms</div>
          <div class="bio">
            The IT team helps when you can't log in, when systems go down, or
            when lab environments need troubleshooting.
          </div>
          <div class="links">
            <a href="#">Submit a Support Request</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Meet Your DIT Support Team",
});
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
