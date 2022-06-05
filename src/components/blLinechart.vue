<template>
  <div c>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores/main";

const labels = [
  "2022-06-22",
  "2022-06-23",
  "2022-06-24",
  "2022-06-25",
  "2022-06-26",
  "2022-06-27",
];

const mainStore = useMainStore();
const getTransactions = computed(() => mainStore.getTransactions);

const getCredit = computed(
  () =>
    getTransactions.value
      .filter((tr) => tr.type.value === "credit")
      .map((tr) => tr.amount) ?? []
);

const getDebit = computed(
  () =>
    getTransactions.value
      .filter((tr) => tr.type.value === "debit")
      .map((tr) => tr.amount) ?? []
);

// const labels = computed(() => [
//   ...new Set(mainStore.getTransactions.map((tr) => tr.date)),
// ]);

const data = {
  labels: labels,
  datasets: [
    {
      label: "Debit",
      backgroundColor: "#ef4444",
      borderColor: "#ef4444",
      data: getDebit,
    },
    {
      label: "Credit",
      backgroundColor: "#22c55e",
      borderColor: "#22c55e",
      data: getCredit,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
  console.log("myChart", myChart);
});
</script>

<style lang="scss" scoped></style>
