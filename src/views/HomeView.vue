<script setup>
import BlList from "../components/blList.vue";
import { computed } from "vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);

const getTransactions = computed(() => mainStore.getTransactions);
const getOweTransaction = computed(() => {
  return getTransactions.value.filter((item) => item.type?.value == "debit");
});
const getOweAmt = computed(() => {
  return getOweTransaction.value.reduce((previousValue, currentValue) => {
    return parseInt(previousValue, 10) + parseInt(currentValue.amount, 10);
  }, 0);
});
const getOwedTransaction = computed(() => {
  return mainStore.getTransactions.filter(
    (item) => item.type?.value == "credit"
  );
});
const getOwedAmt = computed(() => {
  return getOwedTransaction.value.reduce((previousValue, currentValue) => {
    return parseInt(previousValue, 10) + parseInt(currentValue.amount, 10);
  }, 0);
});
const getTotal = computed(() => {
  return getOwedAmt.value - getOweAmt.value;
});
</script>

<template>
  <div>
    <div class="flex w-full gap-4 mb-4">
      <div class="w-10/12 p-4">
        <div class="flex justify-between items-center gap-3">
          <router-link
            to="/expense"
            class="bg-teal-500 text-white p-8 uppercase w-full rounded-md text-center cursor-pointer"
          >
            Add Expenses
          </router-link>
          <router-link
            to="/settle"
            class="bg-lnbtn text-white p-8 uppercase w-full rounded-md text-center cursor-pointer"
          >
            settle up
          </router-link>
        </div>
        <div class="flex my-4 gap-4 mt-12">
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-800 dark:shadow-gray-800"
          >
            <div class="text-gray-500 py-2">Total Balance</div>
            <div
              class="text-3xl mb-1 font-semibold"
              :class="getTotal >= 0 ? 'text-green-500' : 'text-red-500'"
            >
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getTotal }}
            </div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-800 dark:shadow-gray-800"
          >
            <div class="text-gray-500 py-2">You Owe</div>
            <div class="text-3xl mb-1 text-red-500 font-semibold">
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getOweAmt }}
            </div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center dark:border-gray-800 dark:shadow-gray-800"
          >
            <div class="text-gray-500 py-2">You are Owed</div>
            <div class="text-3xl mb-1 text-green-500 font-semibold">
              <span class="pr-0.5">{{ getCurrency.icon }}</span>
              {{ getOwedAmt }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 bg-yellow-300">red</div>
    </div>
    <div class="flex w-full gap-4 py-5">
      <div
        class="w-10/12 m-4 flex border rounded-lg shadow-md dark:border-gray-800 dark:shadow-gray-800"
      >
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333] dark:border-gray-800 dark:shadow-gray-800 dark:bg-gray-800"
          >
            <div class="text-xl font-semibold uppercase dark:text-gray-400">
              You owe
            </div>
            <div>Sort</div>
          </header>
          <bl-list
            class="h-[450px] overflow-scroll w-full"
            :data="getOweTransaction"
          ></bl-list>
        </div>
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333] dark:border-gray-800 dark:shadow-gray-800 dark:bg-gray-800"
          >
            <div class="text-xl font-semibold uppercase dark:text-gray-400">
              You are owed
            </div>
            <div>Sort</div>
          </header>
          <bl-list
            class="h-[450px] overflow-scroll w-full"
            :data="getOwedTransaction"
          ></bl-list>
        </div>
      </div>
      <div class="w-2/5 py-4">
        <div class="w-full shadow-md">
          <header
            class="flex justify-between items-center border p-4 rounded-tl-md rounded-tr-md shadow-[0_3px_5px_-5px_#333]"
          >
            <div class="text-xl font-semibold dark:text-gray-400">
              Recent Activity
            </div>
            <div>Sort</div>
          </header>
          <bl-list
            class="h-[450px] overflow-scroll w-full"
            :data="data"
          ></bl-list>
        </div>
      </div>
    </div>
  </div>
</template>
