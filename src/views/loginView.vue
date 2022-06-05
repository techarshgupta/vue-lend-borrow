<template>
  <div
    class="px-0 md:px-6 py-6 flex h-screen items-center justify-center bg-gradient-to-tr from-gray-200 to-teal-500 dark:text-white dark:from-gray-600 dark:to-teal-800"
  >
    <bl-card
      class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
      rounded="rounded-lg"
      form
      @submit.prevent="submit"
    >
      <div class="text-xl my-3 font-semibold">Log In</div>

      <bl-field label="Email address" help="Please enter your email">
        <bl-control v-model="form.login" name="login" autocomplete="username" />
      </bl-field>

      <bl-field label="Password" help="Please enter your password">
        <bl-control
          v-model="form.pass"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </bl-field>

      <bl-button type="submit" color="info" label="Login" class="w-full" />

      <div
        class="my-4 flex justify-around text-teal-500 cursor-pointer font-semibold"
      >
        Forgot your password?
      </div>

      <div class="relative my-4">
        <div class="border-b border-gray-400"></div>
        <div
          class="absolute -top-3 left-1/2 -ml-5 bg-white px-3 dark:bg-gray-800"
        >
          OR
        </div>
      </div>
      <bl-button type="submit" color="info" label="Login" class="w-full mt-3" />
    </bl-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import BlCard from "../components/blCard.vue";
import BlField from "../components/blField.vue";
import blControl from "../components/blControl.vue";
import blButton from "../components/blButton.vue";
// import blButtons from "../components/blButtons.vue";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
});

const router = useRouter();

const submit = () => {
  router.push("/dashboard");
};
</script>
