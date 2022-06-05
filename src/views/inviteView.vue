<template>
  <div>
    <h2
      class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200"
    >
      Invite User
    </h2>
    <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-200">
      Invite user by filling in below following fields.
    </p>
    <p class="text-red-500 leading-relaxed mb-5">{{ errMsg }}</p>
    <bl-field label="Name *" help="Please enter name">
      <bl-control
        v-model="form.label"
        name="name"
        autocomplete="current-name"
      />
    </bl-field>

    <bl-field label="Email *" help="Please enter email">
      <bl-control
        v-model="form.email"
        type="email"
        name="email"
        autocomplete="current-email"
      />
    </bl-field>
    <bl-button
      type="submit"
      color="info"
      label="Invite"
      class="w-full"
      @click="addUser"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import BlField from "../components/blField.vue";
import blControl from "../components/blControl.vue";
import { reactive, ref } from "vue";
import blButton from "../components/blButton.vue";
import { useRouter } from "vue-router";

const errMsg = ref("");
const form = reactive({
  id: Math.random().toString(36).substr(2, 5),
  label: "",
  email: "",
});
const validator = () => {
  if (!form.label && form.label == "") {
    errMsg.value = "Please enter name";
    return false;
  }
  if (!form.email && form.email == "") {
    errMsg.value = "Please select email";
    return false;
  }
  errMsg.value = null;
  return true;
};
const mainStore = useMainStore();
const router = useRouter();

const addUser = () => {
  if (validator()) {
    console.log("form", form);
    const payload = {
      type: "invite",
      title: "You send an invitation",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    };
    mainStore.addActivity(payload);
    mainStore.addUser(form);
    router.push({ path: "/dashboard" });
  }
};
</script>
