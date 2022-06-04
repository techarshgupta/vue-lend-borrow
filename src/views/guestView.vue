<template>
  <div>
    <nav class="bg-white shadow-md flex items-center justify-between px-2 py-3">
      <div class="text-lg">Lend & Borrow</div>
      <div class="flex justify-evenly gap-4">
        <div class="flex items-center">
          <bl-button
            to="/login"
            outline
            category="secondary"
            color="info"
            label="Login"
          />
          <bl-button to="/signup" color="info" label="Sign Up" />
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import blButton from "../components/blButton.vue";
</script>
