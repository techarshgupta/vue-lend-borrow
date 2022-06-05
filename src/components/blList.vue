<template>
  <div>
    <div
      v-for="(item, idx) in data"
      :key="idx"
      class="flex items-center p-4 border-b mb-0.5 bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center dark:text-white"
      >
        <bl-icon :path="mdiAccount" class="flex-none" size="24" />
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
import { mdiAccount } from "@mdi/js";
import BlIcon from "../components/blIcon.vue";

const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);

defineProps({
  data: {
    type: Array,
    default: null,
  },
});
</script>
