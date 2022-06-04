<template>
  <aside
    class="sidebar fixed bg-white flex flex-col left-0 min-h-screen top-0 px-4 shadow-2xl z-20 click-collapse"
  >
    <div class="flex my-8 items-center cursor-pointer h-8">Lend & Borrow</div>

    <nav class="inline-flex flex-col space-y-2 bg-white">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        class="flex items-center text-gray-600 py-2 cursor-pointer hover:bg-gray-100 pl-2 pr-6 rounded-lg"
      >
        <!-- <img
          :src="link.icon"
          class="w-8 h-8 p-1"
          :class="{ 'mr-4': navExpand || isMobile }"
        /> -->
        <span v-html="link.text" class="font-medium select-none"></span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
// import { useStore } from "@/store";
import { ref } from "vue";
const navLinks = ref([
  {
    // icon: require("@/assets/icon/overview.svg"),
    text: "Home",
    path: "/dashboard",
  },
  {
    // icon: require("@/assets/icon/briefcase.svg"),
    text: "Groups",
    path: "/groups",
  },
  {
    // icon: require("@/assets/icon/workflow.svg"),
    text: "Settings",
    path: "/settings",
  },
  {
    // icon: require("@/assets/icon/mojometer.svg"),
    text: "Invite",
    path: "/invite",
  },
  {
    // icon: require("@/assets/icon/book.svg"),
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
