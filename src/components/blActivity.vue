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
        <bl-icon :path="getIcon(item.type)" class="flex-none" size="24" />
      </div>
      <div class="pl-2">
        <div class="dark:text-gray-400" v-if="item.title">{{ item.title }}</div>
        <div class="dark:text-gray-400" v-if="item.desc">{{ item.desc }}</div>
        <div class="dark:text-gray-400" v-if="item.type === 'credit'">
          <span class="text-sm pr-1 dark:text-gray-400">You recieved</span>
          <span class="text-green-500">
            <span class="">{{ getCurrency.icon }}</span>
            {{ item.amount }}</span
          >
        </div>
        <div v-if="item.type === 'debit'">
          <span class="text-sm pr-1 dark:text-gray-400">You paid</span>
          <span class="text-red-500">
            <span class="">{{ getCurrency.icon }}</span>
            {{ item.amount }}</span
          >
        </div>
        <div v-if="item.date" class="text-sm dark:text-gray-400">
          {{ item.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import { computed } from "vue";
import BlIcon from "../components/blIcon.vue";
import {
  mdiAccount,
  mdiAccountCashOutline,
  mdiAccountGroup,
  mdiAccountPlusOutline,
} from "@mdi/js";
const mainStore = useMainStore();
const getCurrency = computed(() => mainStore.getCurrency);

defineProps({
  data: {
    type: Array,
    default: null,
  },
});

const getIcon = (type) => {
  let icon = "";
  switch (type) {
    case "debit":
      icon = mdiAccountCashOutline;
      break;
    case "group":
      icon = mdiAccountGroup;
      break;
    case "credit":
      icon = mdiAccountCashOutline;
      break;
    case "user":
      icon = mdiAccount;
      break;
    case "invite":
      icon = mdiAccountPlusOutline;
      break;
    default:
      icon = mdiAccount;
      break;
  }
  return icon;
};
</script>
