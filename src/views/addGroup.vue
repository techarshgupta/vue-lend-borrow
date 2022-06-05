<template>
  <div>
    <h2
      class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200"
    >
      Create Group
    </h2>
    <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-200">
      Create group by filling in below following fields.
    </p>
    <p class="text-red-500 leading-relaxed mb-5">{{ errMsg }}</p>
    <bl-field label="Name *" help="Please enter group name">
      <bl-control v-model="form.name" name="name" autocomplete="current-name" />
    </bl-field>

    <bl-field label="Type *" help="Please enter type">
      <bl-control v-model="form.type" name="type" autocomplete="current-type" />
    </bl-field>

    <bl-field label="Status *" help="Please select status">
      <bl-control
        v-model="form.status"
        type="select"
        name="status"
        :options="['Active', 'Inactive']"
        autocomplete="status"
      />
    </bl-field>

    <bl-button
      type="submit"
      color="info"
      label="Create Group"
      class="w-full"
      @click="addGroup"
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
  name: "",
  type: "",
  status: "",
});
const validator = () => {
  if (!form.name && form.name == "") {
    errMsg.value = "Please enter name";
    return false;
  }
  if (!form.type && form.type == "") {
    errMsg.value = "Please enter type";
    return false;
  }
  if (!form.status && form.status == "") {
    errMsg.value = "Please select status";
    return false;
  }
  errMsg.value = null;
  return true;
};
const mainStore = useMainStore();
const router = useRouter();

const addGroup = () => {
  if (validator()) {
    console.log("form", form);
    mainStore.addGroup(form);
    router.push({ path: "/groups" });
  }
};
</script>
