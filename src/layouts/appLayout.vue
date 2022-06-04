<script setup>
import Sidebar from "./sideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <!-- <div
      v-if="device === 'mobile' && sidebar.opened"
      class="fixed inset-0 bg-black opacity-25 h-full w-full z-50"
      @click="handleClickOutside"
    /> -->
    <sidebar />
    <div class="wrapper click-collapse">
      <div class="body pt-12 px-4 bg-white dark:bg-gray-900 h-screen">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  &.click-collapse {
    width: calc(100% - 250px);
    margin-left: 250px;
    transition: all 0.5s ease;
  }
}
</style>
