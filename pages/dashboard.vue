<template>
  <div
    class="p-4 space-y-6 bg-white pages entry dashboard overflow-hidden overflow-y-auto"
  >
    <h1 class="text-2xl text-primary font-bold">Student Dashboard</h1>

    <!-- Current Course -->
    <section>
      <h2 class="text-xl font-semibold mb-2 text-primary">Current Course</h2>
      <CourseCard :course="currentCourse" is-current />
    </section>

    <!-- Progress Tracker -->
    <section>
      <h2 class="text-xl font-semibold mb-2 text-primary">Progress</h2>
      <Card title="Your Progress">
        <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            class="bg-blue-600 h-4 rounded-full transition-all duration-300"
            :style="{ width: currentCourse.progress + '%' }"
          />
        </div>
        <p class="mt-1 text-sm text-gray-600">
          {{ currentCourse.progress }}% completed
        </p>
      </Card>
    </section>

    <!-- Upcoming Events or Deadlines -->
    <section v-if="upcomingEvents.length">
      <h2 class="text-xl font-semibold mb-2 text-primary">Upcoming Events</h2>
      <ul class="space-y-2">
        <li
          v-for="(event, index) in upcomingEvents"
          :key="index"
          class="text-gray-700"
        >
          📅 {{ event.title }} - {{ event.date }}
        </li>
      </ul>
    </section>

    <!-- Other Courses -->
    <section>
      <h2 class="text-xl font-semibold mb-2 text-primary">
        Other Courses You May Like
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseCard
          v-for="course in otherCourses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>

    <!-- Announcements -->
    <section v-if="announcements.length">
      <h2 class="text-xl font-semibold mb-2 text-primary">Announcements</h2>
      <ul class="list-disc pl-5">
        <li
          v-for="(note, idx) in announcements"
          :key="idx"
          class="text-gray-700"
        >
          {{ note }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const currentCourse = ref({
  id: 1,
  title: "Fullstack Web Development",
  description: "Build modern web applications with Vue, Node, and Prisma.",
  progress: 60,
});

const otherCourses = ref([
  {
    id: 2,
    title: "UI/UX Design Essentials",
    description: "Learn the fundamentals of great product design.",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Master technical interviews and CS concepts.",
  },
]);

const upcomingEvents = ref([
  { title: "Module 4 Deadline", date: "May 30, 2025" },
  { title: "Live Q&A with Instructors", date: "June 2, 2025" },
]);

const announcements = ref([
  "Certificate will be available after course completion.",
  "Next cohort starts July 1st — refer a friend!",
]);
</script>

<style lang="scss" scoped>
.pages.entry.dashboard {
  height: calc(100vh - 10px);
}
</style>
