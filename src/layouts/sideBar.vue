<template>
  <aside
    class="sidebar fixed bg-white flex flex-col left-0 min-h-screen top-0 px-4 shadow-2xl z-20 click-collapse dark:bg-gray-800"
  >
    <div class="flex my-8 items-center text-teal-500 text-lg font-semibold">
      Lend & Borrow
    </div>

    <nav class="inline-flex flex-col space-y-2">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        class="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-teal-400 dark:hover:text-teal-100 pl-2 pr-6 rounded-lg"
        :class="
          index == active
            ? 'bg-gray-300 dark:text-teal-100 dark:bg-teal-600'
            : ''
        "
        @click="active = index"
      >
        <bl-icon
          v-if="link.icon"
          :path="link.icon"
          class="flex-none"
          size="24"
        />
        <span v-html="link.text" class="font-medium select-none ml-2"></span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import BlIcon from "../components/blIcon.vue";
import {
  mdiAccountGroup,
  mdiAccountPlusOutline,
  mdiCog,
  mdiHome,
  mdiLogout,
} from "@mdi/js";
const active = ref(0);
const navLinks = ref([
  {
    icon: mdiHome,
    text: "Home",
    path: "/dashboard",
  },
  {
    icon: mdiAccountGroup,
    text: "Groups",
    path: "/groups",
  },
  {
    icon: mdiCog,
    text: "Settings",
    path: "/settings",
  },
  {
    icon: mdiAccountPlusOutline,
    text: "Invite",
    path: "/invite",
  },
  {
    icon: mdiLogout,
    text: "Logout",
    path: "/logout",
  },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  &.click-collapse {
    width: 250px;
    transition: all 0.5s ease;
  }
}
</style>
