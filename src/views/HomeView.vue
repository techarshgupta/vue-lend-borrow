<script setup>
import BlList from "../components/blList.vue";
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import BlChart from "../components/blChart.vue";
import blActivity from "../components/blActivity.vue";
import blControl from "../components/blControl.vue";
const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);
const getActivity = computed(() => mainStore.getActivity);

const getTransactions = computed(() => mainStore.getTransactions);
const getOweTransaction = computed(() => {
  const temp = getTransactions.value.filter(
    (item) => item.type?.value == "debit"
  );
  if (sortOwe.value?.value === "amount") {
    return temp.sort((a, b) => parseInt(b.amount, 10) - parseInt(a.amount, 10));
  }
  if (sortOwe.value?.value === "date") {
    return temp.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return temp;
});
const getOweAmt = computed(() => {
  return getOweTransaction.value.reduce((previousValue, currentValue) => {
    return parseInt(previousValue, 10) + parseInt(currentValue.amount, 10);
  }, 0);
});
const getOwedTransaction = computed(() => {
  const temp = mainStore.getTransactions.filter(
    (item) => item.type?.value == "credit"
  );
  if (sortOwed.value?.value === "amount") {
    return temp.sort((a, b) => parseInt(b.amount, 10) - parseInt(a.amount, 10));
  }
  if (sortOwed.value?.value === "date") {
    return temp.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return temp;
});
const getOwedAmt = computed(() => {
  return getOwedTransaction.value.reduce((previousValue, currentValue) => {
    return parseInt(previousValue, 10) + parseInt(currentValue.amount, 10);
  }, 0);
});
const getTotal = computed(() => {
  return getOwedAmt.value - getOweAmt.value;
});

const sortOwe = ref({
  label: "Date",
  value: "date",
});
const sortOwed = ref({
  label: "Amount",
  value: "amount",
});
const sortOptions = ref([
  {
    label: "Date",
    value: "date",
  },
  {
    label: "Amount",
    value: "amount",
  },
]);
</script>

<template>
  <div>
    <div class="flex w-full mb-4">
      <div class="w-10/12 m-4 pb-0">
        <div class="flex justify-between items-center gap-4">
          <router-link
            to="/expense"
            class="text-white p-8 uppercase w-full rounded-md text-center cursor-pointer bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700 font-semibold text-xl"
          >
            Add Expenses
          </router-link>
          <router-link
            to="/settle"
            class="text-white p-8 uppercase w-full rounded-md text-center cursor-pointer bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 font-semibold text-xl"
          >
            settle up
          </router-link>
        </div>
        <div class="flex items-end gap-4 pt-5 mt-5">
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="text-gray-400 py-2">Total Balance</div>
            <div
              class="text-3xl mb-1"
              :class="getTotal >= 0 ? 'text-green-500' : 'text-red-500'"
            >
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getTotal }}
            </div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="text-gray-400 py-2">You Owe</div>
            <div class="text-3xl mb-1 text-red-500">
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getOweAmt }}
            </div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="text-gray-400 py-2">You are Owed</div>
            <div class="text-3xl mb-1 text-green-500">
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getOwedAmt }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 border shadow-md rounded dark:border-gray-800 p-4">
        <bl-chart />
      </div>
    </div>
    <div class="flex w-full py-5">
      <div class="w-10/12 m-4 flex border rounded-lg dark:border-gray-800">
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333] dark:bg-gray-700 dark:text-gray-400"
          >
            <div class="text-xl font-semibold uppercase dark:text-gray-400">
              You owe
            </div>
            <div>
              <bl-control
                v-model="sortOwe"
                :options="sortOptions"
                name="sort"
                autocomplete="sort"
                h="min-content"
              />
            </div>
          </header>
          <bl-list
            class="h-[450px] overflow-y-auto w-full border-r-gray-200 border-r dark:border-r dark:border-gray-700"
            :data="getOweTransaction"
          ></bl-list>
        </div>
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333] dark:bg-gray-700 dark:text-gray-400"
          >
            <div class="text-xl font-semibold uppercase dark:text-gray-400">
              You are owed
            </div>
            <div>
              <bl-control
                v-model="sortOwed"
                :options="sortOptions"
                name="sort"
                autocomplete="sort"
                h="min-content"
              />
            </div>
          </header>
          <bl-list
            class="h-[450px] overflow-y-auto w-full"
            :data="getOwedTransaction"
          ></bl-list>
        </div>
      </div>
      <div class="w-2/5 py-4">
        <div
          class="w-full border rounded-md border-gray-200 dark:border-gray-800"
        >
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333] dark:bg-gray-700 dark:text-gray-400"
          >
            <div class="text-xl font-semibold dark:text-gray-400">
              Recent Activity
            </div>
            <!-- <div>Sort</div> -->
          </header>
          <bl-activity
            class="h-[450px] overflow-y-auto w-full"
            :data="getActivity"
          ></bl-activity>
        </div>
      </div>
    </div>
  </div>
</template>
