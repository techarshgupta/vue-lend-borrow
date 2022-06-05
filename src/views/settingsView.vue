<template>
  <div>
    <h2
      class="text-gray-900 text-lg mb-5 font-medium title-font dark:text-gray-200"
    >
      Settings
    </h2>

    <bl-field label="Currency" help="Please select currency">
      <bl-control
        v-model="currency"
        :options="currencyOptions"
        name="currency"
        autocomplete="currency"
        h="min-content"
        @update:model-value="setCurrency"
      />
    </bl-field>

    <div class="flex items-center gap-5">
      <div class="text-lg dark:text-gray-400">Select Theme:</div>
      <div @click="toggleTheme" class="mr-4">
        <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ring-4 ring-gray-200 dark:ring-gray-600 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            class="w-5 h-5"
            :class="activeTheme === 'light' ? 'hidden' : ''"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="w-5 h-5"
            :class="activeTheme !== 'light' ? 'hidden' : ''"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "@/stores/main";
import blControl from "../components/blControl.vue";
import blField from "../components/blField.vue";

const mainStore = useMainStore();

const activeTheme = ref("light");
const currency = ref({
  label: "USD",
  icon: "$",
});
const currencyOptions = [
  {
    label: "INR",
    icon: "₹",
  },
  {
    label: "USD",
    icon: "$",
  },
];

const toggleTheme = () => {
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
      activeTheme.value = "dark";
    } else {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
      activeTheme.value = "light";
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
      activeTheme.value = "light";
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
      activeTheme.value = "dark";
    }
  }
};

const setCurrency = (val) => {
  currency.value = val;
  mainStore.setCurrency(currency.value);
};
</script>
