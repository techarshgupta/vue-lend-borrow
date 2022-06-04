<script setup>
import Sidebar from "./sideBar.vue";
import NavBar from "./navBar.vue";
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
      <div class="header fixed z-40 w-full click-collapse">
        <nav-bar />
      </div>
      <div class="body pt-24 px-4">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  &.hover-collapse {
    width: calc(100% - 80px);
    margin-left: 80px;
    transition: all 1s ease;
  }
  &.click-collapse {
    width: calc(100% - 250px);
    margin-left: 250px;
    transition: all 0.5s ease;
  }
}
.header {
  &.hover-collapse {
    width: calc(100% - 80px);
    transition: all 1s ease;
  }
  &.click-collapse {
    width: calc(100% - 250px);
    transition: all 0.5s ease;
  }
}
.mobile {
  .wrapper,
  .header {
    width: 100%;
    margin-left: 0;
  }
  .sidebar {
    z-index: 50;
    width: 250px;
    transition: transform 1s;
  }
  &.hide-sidebar {
    .sidebar {
      pointer-events: none;
      transition-duration: 1s;
      transform: translate3d(-250px, 0, 0);
    }
  }
  &.withoutAnimation {
    .wrapper,
    .sidebar,
    .header {
      transition: none;
    }
  }
}
</style>
