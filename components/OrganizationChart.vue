<template>
  <section class="mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Our Organization
    </h2>
    <div class="flex justify-center items-start overflow-x-auto pb-8">
      <div class="organization-chart">
        <!-- Root Node -->
        <div class="org-node root">
          <div class="org-card">
            <div class="org-avatar">
              <Icon name="mdi:account-circle" class="text-4xl text-white" />
            </div>
            <div class="org-info">
              <h3 class="org-name">{{ rootNode.name }}</h3>
              <p class="org-title">{{ rootNode.title }}</p>
            </div>
          </div>

          <!-- Children Container -->
          <div
            v-if="rootNode.children && rootNode.children.length > 0"
            class="org-children"
          >
            <div
              v-for="(child, index) in rootNode.children"
              :key="index"
              class="org-child"
            >
              <!-- Connector Line -->
              <div class="org-connector"></div>

              <!-- Child Node -->
              <div class="org-node">
                <div class="org-card">
                  <div class="org-avatar">
                    <Icon
                      name="mdi:account-circle"
                      class="text-3xl text-white"
                    />
                  </div>
                  <div class="org-info">
                    <h3 class="org-name">{{ child.name }}</h3>
                    <p class="org-title">{{ child.title }}</p>
                  </div>
                </div>

                <!-- Grandchildren -->
                <div
                  v-if="child.children && child.children.length > 0"
                  class="org-children org-grandchildren"
                >
                  <div
                    v-for="(grandchild, gIndex) in child.children"
                    :key="gIndex"
                    class="org-child"
                  >
                    <div class="org-connector"></div>
                    <div class="org-node">
                      <div class="org-card">
                        <div class="org-avatar">
                          <Icon
                            name="mdi:account-circle"
                            class="text-2xl text-white"
                          />
                        </div>
                        <div class="org-info">
                          <h3 class="org-name">{{ grandchild.name }}</h3>
                          <p class="org-title">{{ grandchild.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface OrgNode {
  name: string;
  title: string;
  children?: OrgNode[];
}

interface Props {
  data?: OrgNode;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    name: "Executive Director",
    title: "Leadership",
    children: [
      {
        name: "Academic Director",
        title: "Education",
        children: [
          {
            name: "AI Program Lead",
            title: "Artificial Intelligence",
          },
          {
            name: "Web Dev Lead",
            title: "Web Development",
          },
          {
            name: "Digital Media Lead",
            title: "Digital Media",
          },
        ],
      },
      {
        name: "Operations Director",
        title: "Operations",
        children: [
          {
            name: "Student Services",
            title: "Support",
          },
          {
            name: "Technical Support",
            title: "IT Services",
          },
        ],
      },
      {
        name: "Marketing Director",
        title: "Marketing & Outreach",
        children: [
          {
            name: "Community Manager",
            title: "Community",
          },
          {
            name: "Content Creator",
            title: "Content",
          },
        ],
      },
    ],
  }),
});

const rootNode = computed(() => props.data);
</script>

<style lang="scss" scoped>
.organization-chart {
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.org-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &.root {
    padding-top: 0;
  }
}

.org-card {
  background: linear-gradient(
    135deg,
    var(--color-primary-600),
    var(--color-primary-700)
  );
  border: 2px solid var(--color-primary-400);
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 200px;
  max-width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    border-color: var(--color-primary-300);
  }
}

.org-avatar {
  background: var(--color-primary-800);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  border: 2px solid var(--color-primary-400);
}

.org-info {
  width: 100%;
}

.org-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.org-title {
  font-size: 0.875rem;
  color: var(--color-primary-200);
  font-weight: 400;
}

.org-children {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  position: relative;
  gap: 1rem;
  flex-wrap: wrap;

  &::before {
    content: "";
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem;
    background: var(--color-primary-400);
  }
}

.org-grandchildren {
  margin-top: 1.5rem;
  gap: 0.75rem;
}

.org-child {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 180px;
  max-width: 220px;
}

.org-connector {
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 1.5rem;
  background: var(--color-primary-400);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background: var(--color-primary-400);
  }
}

.org-grandchildren .org-child .org-connector {
  top: -1.25rem;
  height: 1.25rem;
}

// Responsive adjustments
@media (max-width: 768px) {
  .organization-chart {
    padding: 1rem 0;
  }

  .org-card {
    min-width: 160px;
    max-width: 180px;
    padding: 1rem;
  }

  .org-name {
    font-size: 0.875rem;
  }

  .org-title {
    font-size: 0.75rem;
  }

  .org-children {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &::before {
      display: none;
    }
  }

  .org-child {
    min-width: 160px;
    max-width: 180px;
  }

  .org-connector {
    &::before {
      display: none;
    }
  }
}
</style>
