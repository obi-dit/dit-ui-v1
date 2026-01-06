<template>
  <section class="text-primary pages entry program-outcomes-page">
    <div class="outcomes-container">
      <h1>Program Outcomes & Metrics</h1>
      <div class="subtitle">
        Annual and quarterly performance metrics for all DIT programs
        (2024-2025)
      </div>

      <!-- Annual Summary Section -->
      <section class="metrics-section">
        <h2 class="section-title">Annual Summary (2024-2025)</h2>
        <div class="metrics-grid">
          <div
            v-for="program in annualMetrics"
            :key="program.program"
            class="metric-card"
          >
            <h3 class="program-name">{{ program.program }}</h3>
            <div class="metric-row">
              <span class="metric-label">Age Group:</span>
              <span class="metric-value">{{ program.ageGroup }}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Students Trained:</span>
              <span class="metric-value">{{
                formatMetricValue(program.studentsTrained)
              }}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Completions:</span>
              <span class="metric-value">{{
                formatMetricValue(program.completions)
              }}</span>
            </div>
            <div class="metric-row">
              <span class="metric-label">Job Placements:</span>
              <span class="metric-value">{{
                formatMetricValue(program.placements)
              }}</span>
            </div>
            <div v-if="program.completionRate" class="metric-row">
              <span class="metric-label">Completion Rate:</span>
              <span class="metric-value rate">{{
                formatPercentage(program.completionRate)
              }}</span>
            </div>
            <div v-if="program.placementRate" class="metric-row">
              <span class="metric-label">Placement Rate:</span>
              <span class="metric-value rate">{{
                formatPercentage(program.placementRate)
              }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Annual Comparison Chart -->
      <section class="chart-section">
        <h2 class="section-title">Annual Outcomes Comparison</h2>
        <div class="chart-container">
          <div class="bar-chart">
            <div class="chart-bars">
              <div
                v-for="program in annualMetrics"
                :key="program.program"
                class="chart-group"
              >
                <div class="chart-label">{{ program.program }}</div>
                <div class="bars-wrapper">
                  <div class="bar-container">
                    <div
                      class="bar bar-trained"
                      :style="{
                        height:
                          getBarHeight(program.studentsTrained, maxValue) + '%',
                      }"
                      :title="`Trained: ${formatMetricValue(
                        program.studentsTrained,
                        true
                      )}`"
                    ></div>
                    <span class="bar-value">{{
                      formatMetricValue(program.studentsTrained, true)
                    }}</span>
                  </div>
                  <div class="bar-container">
                    <div
                      class="bar bar-completed"
                      :style="{
                        height:
                          getBarHeight(program.completions, maxValue) + '%',
                      }"
                      :title="`Completed: ${formatMetricValue(
                        program.completions,
                        true
                      )}`"
                    ></div>
                    <span class="bar-value">{{
                      formatMetricValue(program.completions, true)
                    }}</span>
                  </div>
                  <div class="bar-container">
                    <div
                      class="bar bar-placed"
                      :style="{
                        height:
                          getBarHeight(program.placements, maxValue) + '%',
                      }"
                      :title="`Placed: ${formatMetricValue(
                        program.placements,
                        true
                      )}`"
                    ></div>
                    <span class="bar-value">{{
                      formatMetricValue(program.placements, true)
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="chart-legend">
              <div class="legend-item">
                <span class="legend-color bar-trained"></span>
                <span>Trained</span>
              </div>
              <div class="legend-item">
                <span class="legend-color bar-completed"></span>
                <span>Completed</span>
              </div>
              <div class="legend-item">
                <span class="legend-color bar-placed"></span>
                <span>Placed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Helpdesk Support Annual Chart -->
      <section class="chart-section">
        <h2 class="section-title">Helpdesk Support - Annual Outcomes</h2>
        <div class="chart-container">
          <div class="bar-chart single-program">
            <div class="chart-bars">
              <div class="chart-group">
                <div class="bars-wrapper">
                  <div class="bar-container">
                    <div
                      class="bar bar-trained"
                      :style="{
                        height:
                          getBarHeight(
                            helpdeskAnnual.studentsTrained,
                            helpdeskMax
                          ) + '%',
                      }"
                      :title="`Trained: ${helpdeskAnnual.studentsTrained}`"
                    ></div>
                    <span class="bar-value">{{
                      helpdeskAnnual.studentsTrained
                    }}</span>
                    <div class="bar-label">Trained</div>
                  </div>
                  <div class="bar-container">
                    <div
                      class="bar bar-completed"
                      :style="{
                        height:
                          getBarHeight(
                            helpdeskAnnual.completions,
                            helpdeskMax
                          ) + '%',
                      }"
                      :title="`Completed: ${helpdeskAnnual.completions}`"
                    ></div>
                    <span class="bar-value">{{
                      helpdeskAnnual.completions
                    }}</span>
                    <div class="bar-label">Completed</div>
                  </div>
                  <div class="bar-container">
                    <div
                      class="bar bar-placed"
                      :style="{
                        height:
                          getBarHeight(helpdeskAnnual.placements, helpdeskMax) +
                          '%',
                      }"
                      :title="`Placed: ${helpdeskAnnual.placements}`"
                    ></div>
                    <span class="bar-value">{{
                      helpdeskAnnual.placements
                    }}</span>
                    <div class="bar-label">Placed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quarterly Metrics Section -->
      <section class="metrics-section">
        <h2 class="section-title">Quarterly Breakdown (2024-2025)</h2>
        <div
          v-for="program in programs"
          :key="program"
          class="quarterly-section"
        >
          <h3 class="program-title">{{ program }}</h3>
          <div class="quarterly-grid">
            <div
              v-for="quarter in getQuarterlyData(program)"
              :key="quarter.quarter"
              class="quarter-card"
            >
              <h4 class="quarter-label">{{ quarter.quarter }}</h4>
              <div class="metric-row">
                <span class="metric-label">Trained:</span>
                <span class="metric-value">{{
                  formatMetricValue(quarter.studentsTrained)
                }}</span>
              </div>
              <div class="metric-row">
                <span class="metric-label">Completed:</span>
                <span class="metric-value">{{
                  formatMetricValue(quarter.completions)
                }}</span>
              </div>
              <div class="metric-row">
                <span class="metric-label">Placed:</span>
                <span class="metric-value">{{
                  formatMetricValue(quarter.placements)
                }}</span>
              </div>
            </div>
          </div>

          <!-- Quarterly Chart for this program -->
          <div class="quarterly-chart-container">
            <h4 class="chart-subtitle">{{ program }} - Quarterly Trends</h4>
            <div class="bar-chart quarterly">
              <div class="chart-bars">
                <div
                  v-for="quarter in getQuarterlyData(program)"
                  :key="quarter.quarter"
                  class="chart-group"
                >
                  <div class="chart-label">{{ quarter.quarter }}</div>
                  <div class="bars-wrapper">
                    <div class="bar-container">
                      <div
                        class="bar bar-trained"
                        :style="{
                          height:
                            getBarHeight(
                              quarter.studentsTrained,
                              getQuarterlyMax(program)
                            ) + '%',
                        }"
                        :title="`Trained: ${formatMetricValue(
                          quarter.studentsTrained,
                          true
                        )}`"
                      ></div>
                      <span class="bar-value">{{
                        formatMetricValue(quarter.studentsTrained, true)
                      }}</span>
                    </div>
                    <div class="bar-container">
                      <div
                        class="bar bar-completed"
                        :style="{
                          height:
                            getBarHeight(
                              quarter.completions,
                              getQuarterlyMax(program)
                            ) + '%',
                        }"
                        :title="`Completed: ${formatMetricValue(
                          quarter.completions,
                          true
                        )}`"
                      ></div>
                      <span class="bar-value">{{
                        formatMetricValue(quarter.completions, true)
                      }}</span>
                    </div>
                    <div class="bar-container">
                      <div
                        class="bar bar-placed"
                        :style="{
                          height:
                            getBarHeight(
                              quarter.placements,
                              getQuarterlyMax(program)
                            ) + '%',
                        }"
                        :title="`Placed: ${formatMetricValue(
                          quarter.placements,
                          true
                        )}`"
                      ></div>
                      <span class="bar-value">{{
                        formatMetricValue(quarter.placements, true)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chart-legend">
                <div class="legend-item">
                  <span class="legend-color bar-trained"></span>
                  <span>Trained</span>
                </div>
                <div class="legend-item">
                  <span class="legend-color bar-completed"></span>
                  <span>Completed</span>
                </div>
                <div class="legend-item">
                  <span class="legend-color bar-placed"></span>
                  <span>Placed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Data Export Section -->
      <!-- <section class="export-section">
        <h2 class="section-title">Export Data</h2>
        <p class="export-note">
          Download the complete metrics dataset for further analysis.
        </p>
        <div class="export-buttons">
          <button class="export-btn" @click="exportToCSV">Export as CSV</button>
          <button class="export-btn" @click="exportToJSON">
            Export as JSON
          </button>
        </div>
      </section> -->
    </div>

    <Footer />
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

useHead({
  title: "Program Outcomes & Metrics - DIT",
});

interface MetricRecord {
  program: string;
  ageGroup: string;
  periodType: "Annual" | "Quarterly";
  periodLabel: string;
  quarter: string | null;
  studentsTrained: number | null;
  completions: number | null;
  placements: number | null;
  completionRate?: number | null;
  placementRate?: number | null;
}

// Build metrics data structure
const buildMetricsData = (): MetricRecord[] => {
  const records: MetricRecord[] = [];

  const addProgramRows = (program: string, ageGroup: string) => {
    // Annual
    records.push({
      program,
      ageGroup,
      periodType: "Annual",
      periodLabel: "2024-2025",
      quarter: null,
      studentsTrained: null,
      completions: null,
      placements: null,
    });

    // Quarterly
    for (const q of ["Q1", "Q2", "Q3", "Q4"]) {
      records.push({
        program,
        ageGroup,
        periodType: "Quarterly",
        periodLabel: `2024-2025 ${q}`,
        quarter: q,
        studentsTrained: null,
        completions: null,
        placements: null,
      });
    }
  };

  addProgramRows("Helpdesk Support", "18+");
  addProgramRows("Systems Administration", "18+");
  addProgramRows("AI Essentials", "14–17");
  addProgramRows("IT Fundamentals", "14–17");

  // Add known Helpdesk annual metrics
  const hdAnnual = records.find(
    (r) => r.program === "Helpdesk Support" && r.periodType === "Annual"
  );
  if (hdAnnual) {
    hdAnnual.studentsTrained = 10;
    hdAnnual.completions = 10;
    hdAnnual.placements = 4;
    hdAnnual.completionRate = 1.0; // 100%
    hdAnnual.placementRate = 0.4; // 40%
  }

  return records;
};

const allMetrics = buildMetricsData();

const programs = [
  "Helpdesk Support",
  "Systems Administration",
  "AI Essentials",
  "IT Fundamentals",
];

const annualMetrics = computed(() => {
  return allMetrics
    .filter((m) => m.periodType === "Annual")
    .map((m) => ({
      program: m.program,
      ageGroup: m.ageGroup,
      studentsTrained: m.studentsTrained,
      completions: m.completions,
      placements: m.placements,
      completionRate: m.completionRate,
      placementRate: m.placementRate,
    }));
});

const helpdeskAnnual = computed(() => {
  const hd = annualMetrics.value.find((m) => m.program === "Helpdesk Support");
  return {
    studentsTrained: hd?.studentsTrained ?? 0,
    completions: hd?.completions ?? 0,
    placements: hd?.placements ?? 0,
  };
});

const maxValue = computed(() => {
  return Math.max(
    ...annualMetrics.value.map((m) => m.studentsTrained ?? 0),
    ...annualMetrics.value.map((m) => m.completions ?? 0),
    ...annualMetrics.value.map((m) => m.placements ?? 0)
  );
});

const helpdeskMax = computed(() => {
  return Math.max(
    helpdeskAnnual.value.studentsTrained,
    helpdeskAnnual.value.completions,
    helpdeskAnnual.value.placements
  );
});

const getQuarterlyData = (program: string) => {
  return allMetrics.filter(
    (m) => m.program === program && m.periodType === "Quarterly"
  );
};

const getQuarterlyMax = (program: string) => {
  const quarterly = getQuarterlyData(program);
  return Math.max(
    ...quarterly.map((q) => q.studentsTrained ?? 0),
    ...quarterly.map((q) => q.completions ?? 0),
    ...quarterly.map((q) => q.placements ?? 0),
    1 // Minimum 1 to avoid division by zero
  );
};

const getBarHeight = (value: number | null, max: number): number => {
  if (!value || max === 0) return 0;
  return Math.max((value / max) * 100, 5); // Minimum 5% for visibility
};

const formatPercentage = (rate: number | null | undefined): string => {
  if (rate === null || rate === undefined) return "TBD";
  return `${(rate * 100).toFixed(0)}%`;
};

const formatMetricValue = (
  value: number | null | undefined,
  forChart: boolean = false
): string | number => {
  if (value === null || value === undefined) {
    return forChart ? 0 : "TBD";
  }
  return value;
};

const exportToCSV = () => {
  const headers = [
    "Program",
    "Age Group",
    "Period Type",
    "Period Label",
    "Quarter",
    "Students Trained",
    "Completions",
    "Placements",
    "Completion Rate",
    "Placement Rate",
  ];

  const rows = allMetrics.map((m) => [
    m.program,
    m.ageGroup,
    m.periodType,
    m.periodLabel,
    m.quarter ?? "",
    formatMetricValue(m.studentsTrained),
    formatMetricValue(m.completions),
    formatMetricValue(m.placements),
    m.completionRate ? formatPercentage(m.completionRate) : "TBD",
    m.placementRate ? formatPercentage(m.placementRate) : "TBD",
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "DIT_Metrics_2024_2025.csv";
  link.click();
};

const exportToJSON = () => {
  const jsonContent = JSON.stringify(allMetrics, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "DIT_Metrics_2024_2025.json";
  link.click();
};
</script>

<style lang="scss" scoped>
.pages.entry.program-outcomes-page {
  background: #002a5c;
  color: #ffffff;
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 0;
}

.outcomes-container {
  max-width: 1400px;
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
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 2px solid #0b57d0;
  padding-bottom: 8px;
}

.metrics-section {
  margin-bottom: 50px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.metric-card {
  background: #0b57d0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.program-name {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.metric-label {
  color: #e0ecff;
}

.metric-value {
  color: #ffffff;
  font-weight: 500;

  &.rate {
    color: #ffee8a;
    font-weight: 600;
  }
}

.chart-section {
  margin-bottom: 50px;
}

.chart-container {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
}

.bar-chart {
  width: 100%;
}

.chart-bars {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  min-height: 300px;
  gap: 20px;
  margin-bottom: 20px;
}

.chart-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-label {
  font-size: 12px;
  color: #e0ecff;
  margin-bottom: 8px;
  text-align: center;
  word-break: break-word;
}

.bars-wrapper {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
}

.bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.bar {
  width: 100%;
  min-height: 20px;
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &.bar-trained {
    background: #0052ff;
  }

  &.bar-completed {
    background: #1f6fff;
  }

  &.bar-placed {
    background: #db6400;
  }

  &:hover {
    opacity: 0.8;
    transform: scaleY(1.05);
  }
}

.bar-value {
  font-size: 11px;
  color: #ffffff;
  margin-top: 4px;
  font-weight: 600;
}

.bar-label {
  font-size: 10px;
  color: #e0ecff;
  margin-top: 4px;
}

.chart-legend {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #e0ecff;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 3px;

  &.bar-trained {
    background: #0052ff;
  }

  &.bar-completed {
    background: #1f6fff;
  }

  &.bar-placed {
    background: #db6400;
  }
}

.bar-chart.single-program {
  .chart-bars {
    justify-content: center;
  }

  .chart-group {
    max-width: 400px;
  }

  .bars-wrapper {
    max-width: 300px;
  }
}

.quarterly-section {
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 24px;
}

.program-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
}

.quarterly-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 30px;
}

.quarter-card {
  background: #0b57d0;
  border-radius: 8px;
  padding: 16px;
}

.quarter-label {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  text-align: center;
}

.quarterly-chart-container {
  margin-top: 30px;
}

.chart-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #e0ecff;
  margin-bottom: 16px;
}

.bar-chart.quarterly {
  .chart-bars {
    min-height: 250px;
  }
}

.export-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  margin-top: 40px;
}

.export-note {
  color: #e0ecff;
  margin-bottom: 20px;
  font-size: 14px;
}

.export-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.export-btn {
  background: #0b57d0;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0a4bb5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .outcomes-container {
    padding: 20px 12px 30px;
  }

  h1 {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .chart-bars {
    flex-direction: column;
    align-items: center;
    min-height: auto;
  }

  .chart-group {
    width: 100%;
    margin-bottom: 20px;
  }

  .bars-wrapper {
    max-width: 300px;
  }

  .quarterly-grid {
    grid-template-columns: 1fr;
  }

  .export-buttons {
    flex-direction: column;
  }
}
</style>
