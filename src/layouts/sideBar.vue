<template>
  <aside
    class="sidebar fixed bg-white flex flex-col left-0 min-h-screen top-0 px-10 shadow-2xl z-20 click-collapse dark:bg-gray-800"
  >
    <div class="flex my-8 items-center text-teal-500 text-lg font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 72 72"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="48"
          height="48"
          rx="41.5"
          stroke="#17C497"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="24 24"
        />
      </svg>

      <span class="-mt-1">Lend & Borrow</span>
    </div>

    <nav class="inline-flex flex-col space-y-2">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        class="flex items-center text-gray-400 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-teal-400 dark:hover:text-teal-100 pl-4 pr-6 rounded-lg"
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

    <div class="bottom-6 absolute flex -ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
      >
        <path
          d="M0 23.5208C0 11.0829 10.0829 1 22.5208 1H23C35.7025 1 46 11.2975 46 24V24C46 36.7025 35.7025 47 23 47V47V47C10.2975 47 0 36.7026 0 24V23.5208V23.5208Z"
          fill="black"
        />
        <path
          d="M23.0656 1.00007C29.0575 1.02828 34.8934 3.41687 39.1116 7.4237C43.3298 11.4305 46.1578 16.8643 46.1312 22.5026C46.1179 25.3218 44.4419 28.0047 42.3141 29.9881C40.1862 31.9716 37.3077 33.078 34.3117 33.0639C31.3158 33.0498 28.4478 31.9163 26.3387 29.9129C24.2296 27.9095 23.0522 25.2002 23.0655 22.3811C23.0788 19.5619 21.9013 16.8526 19.7923 14.8492C17.6832 12.8458 14.8152 11.7124 11.8192 11.6983C8.82329 11.6842 5.94477 12.7905 3.81692 14.774C1.68907 16.7575 0.486199 19.4556 0.472927 22.2747C0.499471 16.6364 2.87552 10.467 7.13122 6.50007C11.3869 2.53313 17.0736 0.971862 23.0656 1.00007Z"
          fill="#17C497"
        />
        <path
          opacity="0.78"
          d="M22.0654 3.12175C28.0573 3.14996 35.2818 3.99317 39.5 8C43.7182 12.0068 45.5264 18.986 45.4999 24.6243C45.4866 27.4434 43.6277 30.0511 41.4999 32.0346C39.372 34.0181 36.3075 35.1997 33.3116 35.1856C30.3156 35.1715 27.4476 34.038 25.3385 32.0346C23.2295 30.0312 22.052 27.3219 22.0653 24.5027C22.0786 21.6836 20.9012 18.9743 18.7921 16.9709C16.683 14.9675 13.815 13.834 10.8191 13.8199C7.82313 13.8058 4.9446 14.9122 2.81675 16.8957C0.688907 18.8791 0.513152 18.6808 0.49988 21.5C0.526423 15.8617 1.87536 12.5887 6.13105 8.62175C10.3867 4.65481 16.0735 3.09354 22.0654 3.12175Z"
          fill="#17C497"
        />
      </svg>
      <div class="ml-2">
        <div class="dark:text-gray-400 text-sm font-semibold">John Doe</div>
        <div class="dark:text-gray-400 text-sm font-semibold">
          john.doe@email.com
        </div>
      </div>
    </div>
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
