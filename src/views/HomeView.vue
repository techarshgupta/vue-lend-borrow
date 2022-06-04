<script setup>
// import BlCard from "../components/blCard.vue";
import BlList from "../components/blList.vue";

import { computed, ref } from "vue";

// import TheWelcome from "@/components/TheWelcome.vue";
const data = ref([
  {
    name: "test",
    amount: 120.21,
    type: "debit",
  },
  {
    name: "test2",
    amount: 120.21,
    type: "credit",
  },
  {
    name: "test",
    amount: 120.21,
    type: "debit",
  },
  {
    name: "test2",
    amount: 120.21,
    type: "credit",
  },
  {
    name: "test",
    amount: 120.21,
    type: "debit",
  },
  {
    name: "test2",
    amount: 120.21,
    type: "credit",
  },
  {
    name: "test",
    amount: 120.21,
    type: "debit",
  },
  {
    name: "test2",
    amount: 120.21,
    type: "credit",
  },
]);
const getOweAmt = computed(() => {
  return data.value
    .filter((item) => item.type == "debit")
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue.amount;
    }, 0);
});
const getOwedAmt = computed(() => {
  return data.value
    .filter((item) => item.type == "credit")
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue.amount;
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
          <div
            class="bg-teal-500 text-white p-8 uppercase w-full rounded-md text-center"
          >
            Add Expenses
          </div>
          <div
            class="bg-amber-600 text-white p-8 uppercase w-full rounded-md text-center"
          >
            settle up
          </div>
        </div>
        <div class="flex my-4 gap-4 mt-12">
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center"
          >
            <div class="text-gray-500 py-2">Total Balance</div>
            <div
              class="text-3xl mb-1"
              :class="getTotal >= 0 ? 'text-green-500' : 'text-red-500'"
            >
              {{ getTotal }}
            </div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center"
          >
            <div class="text-gray-500 py-2">You Owe</div>
            <div class="text-3xl mb-1 text-red-500">{{ getOweAmt }}</div>
          </div>
          <div
            class="flex flex-col border border-gray-200 p-4 rounded-md shadow-md w-full text-center"
          >
            <div class="text-gray-500 py-2">You are Owed</div>
            <div class="text-3xl mb-1 text-green-500">{{ getOwedAmt }}</div>
          </div>
        </div>
      </div>
      <div class="w-2/5 bg-yellow-300">red</div>
    </div>
    <div class="flex w-full gap-4 py-5">
      <div class="w-10/12 m-4 flex border rounded-lg shadow-md">
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333]"
          >
            <div class="text-xl font-semibold uppercase">You owe</div>
            <div>Sort</div>
          </header>
          <bl-list
            class="h-[450px] overflow-scroll w-full"
            :data="data"
          ></bl-list>
        </div>
        <div class="w-full">
          <header
            class="flex justify-between items-center p-4 shadow-[0_3px_5px_-5px_#333]"
          >
            <div class="text-xl font-semibold uppercase">You are owed</div>
            <div>Sort</div>
          </header>
          <bl-list
            class="h-[450px] overflow-scroll w-full"
            :data="data"
          ></bl-list>
        </div>
      </div>
      <div class="w-2/5 py-4">
        <div class="w-full shadow-md">
          <header
            class="flex justify-between items-center border p-4 rounded-tl-md rounded-tr-md shadow-[0_3px_5px_-5px_#333]"
          >
            <div class="text-xl font-semibold">Recent Activity</div>
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
