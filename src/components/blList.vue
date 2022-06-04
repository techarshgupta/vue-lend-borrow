<template>
  <div>
    <div
      v-for="(item, idx) in data"
      :key="idx"
      class="flex items-center p-4 border-b mb-0.5 dark:border-b-gray-800"
    >
      <div
        class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
      >
        <svg
          class="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="ml-2">
        <div class="dark:text-gray-400">{{ item.user }}</div>
        <div v-if="item.type.value === 'credit'">
          <span class="text-sm pr-1 dark:text-gray-400">Owes you</span>
          <span class="text-green-500">
            <span class="">{{ getCurrency.icon }}</span>
            {{ item.amount }}</span
          >
        </div>
        <div v-if="item.type.value === 'debit'">
          <span class="text-sm pr-1 dark:text-gray-400">You owe</span>
          <span class="text-red-500">
            <span class="">{{ getCurrency.icon }}</span>
            {{ item.amount }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import { computed } from "vue";
const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);

defineProps({
  data: {
    type: Array,
    default: null,
  },
});
</script>
