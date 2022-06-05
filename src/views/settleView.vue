<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="py-4">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Search for items"
          v-model="search"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">User</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Amount</th>
          <th scope="col" class="px-6 py-3">Reason</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(tr, idx) in getTransactions"
          :key="idx"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap capitalize"
          >
            {{ tr.user }}
          </th>
          <td class="px-6 py-4 capitalize">{{ tr.type?.label }}</td>
          <td class="px-6 py-4 capitalize">{{ tr.date }}</td>
          <td class="px-6 py-4 capitalize">
            <span class="pr-0.5">{{ getCurrency.icon }}</span>
            {{ tr.amount }}
          </td>
          <td class="px-6 py-4 capitalize">{{ tr.reason }}</td>
          <td class="px-6 py-4 capitalize">{{ tr.status }}</td>
          <td class="px-6 py-4 capitalize">
            <bl-button
              :disabled="tr.status === 'paid'"
              type="submit"
              color="info"
              outline
              label="Pay"
              class="px-6"
              @click="onClickPay(tr)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import blButton from "../components/blButton.vue";

import { useMainStore } from "@/stores/main";
import { computed, ref } from "vue";
const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);

const search = ref(null);
const getTransactions = computed(() => {
  if (!search.value) {
    return mainStore.getTransactions;
  } else {
    return mainStore.getTransactions.filter((item) => {
      return Object.values(item).some((word) =>
        String(word).toLowerCase().includes(search.value)
      );
    });
  }
});

const onClickPay = (tr) => {
  let text = "Are you sure you want to settle your borrow!";
  if (confirm(text) == true) {
    console.log(tr);
    const payload = {
      type: "credit",
      title: "You settled amount",
      amount: tr.amount,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    };
    mainStore.addActivity(payload);
    mainStore.settlePay(tr.id);
  }
};
</script>
