<template>
  <div
    class="px-0 md:px-6 py-6 flex h-screen items-center justify-center bg-gradient-to-tr from-gray-200 to-teal-500"
  >
    <bl-card
      class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
      rounded="rounded-lg"
      form
      @submit.prevent="submit"
    >
      <div class="text-xl my-3 font-semibold uppercase">Introduce Yourself</div>

      <bl-field label="Hi there! My name is" help="Please enter your name">
        <bl-control v-model="form.name" name="login" autocomplete="username" />
      </bl-field>

      <bl-field label="Here's my email address" help="Please enter your email">
        <bl-control
          v-model="form.email"
          type="email"
          name="login"
          autocomplete="email"
        />
      </bl-field>

      <bl-field
        label="Here's my email password"
        help="Please enter your password"
      >
        <bl-control
          v-model="form.pass"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </bl-field>

      <div class="flex items-center">
        <bl-button
          type="submit"
          color="info"
          label="Sign me up!"
          class="w-full"
        />
        <div class="bg-white px-3">OR</div>
        <bl-button
          type="submit"
          color="info"
          label="Login with google"
          class="w-full"
        />
      </div>
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

const form = reactive({
  name: "john.doe",
  email: "john.doe",
  pass: "highly-secure-password-fYjUw-",
});

const router = useRouter();

const submit = () => {
  router.push("/dashboard");
};
</script>
