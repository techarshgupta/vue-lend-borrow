<template>
  <canvas id="myChart"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import { computed, onMounted } from "vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const getTransactions = computed(() => mainStore.getTransactions);

const getCredit = computed(() =>
  getTransactions.value.filter((tr) => tr.type.value === "credit")
);

const getDebit = computed(() =>
  getTransactions.value.filter((tr) => tr.type.value === "debit")
);

const data = {
  datasets: [
    {
      label: "Debit",
      backgroundColor: "#ef4444",
      borderColor: "#ef4444",
      data: new Array(...getDebit.value),
    },
    {
      label: "Credit",
      backgroundColor: "#22c55e",
      borderColor: "#22c55e",
      data: new Array(...getCredit.value),
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    parsing: {
      xAxisKey: "date",
      yAxisKey: "amount",
    },
  },
};
onMounted(() => {
  const myChart = new Chart(document.getElementById("myChart"), config);
  console.log("myChart", myChart);
});
</script>
