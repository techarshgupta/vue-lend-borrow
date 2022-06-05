<template>
  <div class="pb-12">
    <h2
      class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200"
    >
      Add Transaction
    </h2>
    <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-200">
      Add a transaction by filling in below following fields
    </p>
    <p class="text-red-500 leading-relaxed mb-5">{{ errMsg }}</p>
    <bl-field
      :label="`Amount * ${getCurrency.icon}`"
      help="Please enter amount"
    >
      <bl-control
        v-model="form.amount"
        type="number"
        name="amount"
        autocomplete="current-amount"
      />
    </bl-field>

    <bl-field label="Transaction With *" help="Please select user">
      <bl-control
        v-model="form.user"
        type="select"
        name="user"
        :options="users"
        autocomplete="user"
      />
    </bl-field>

    <bl-field
      label="Transaction Type *"
      help="Please select type of transaction"
    >
      <bl-control
        v-model="form.type"
        :options="types"
        name="type"
        autocomplete="type"
      />
    </bl-field>

    <bl-field
      label="Transaction Date *"
      help="Please select date of transaction"
    >
      <bl-control
        type="date"
        v-model="form.date"
        name="login"
        autocomplete="type"
      />
    </bl-field>

    <bl-field label="Reason *" help="Please enter your reason">
      <bl-control
        v-model="form.reason"
        name="reason"
        autocomplete="current-reason"
      />
    </bl-field>
    <bl-button
      type="submit"
      color="info"
      label="Submit"
      class="w-full"
      @click="addTransaction"
    />
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/main";

import BlField from "../components/blField.vue";
import blControl from "../components/blControl.vue";
import { computed, reactive, ref } from "vue";
import blButton from "../components/blButton.vue";
import { useRouter } from "vue-router";

const errMsg = ref("");
const form = reactive({
  id: Math.random().toString(36).substr(2, 5),
  user: "",
  type: "",
  date: "",
  reason: "",
  amount: "",
  status: "unpaid",
});
const getCurrency = computed(() => mainStore.getCurrency);
const users = computed(() => mainStore.getUsers);
const types = computed(() => [
  {
    label: "Borrows",
    value: "debit",
  },
  {
    label: "Lenders",
    value: "credit",
  },
]);
const validator = () => {
  if (!form.amount && form.amount == "") {
    errMsg.value = "Please enter amount";
    return false;
  }
  if (!form.user && form.user == "") {
    errMsg.value = "Please select user";
    return false;
  }
  if (!form.type && form.type == "") {
    errMsg.value = "Please select type";
    return false;
  }
  if (!form.date && form.date == "") {
    errMsg.value = "Please select date";
    return false;
  }
  if (!form.reason && form.reason == "") {
    errMsg.value = "Please enter reason";
    return false;
  }
  errMsg.value = null;
  return true;
};
const mainStore = useMainStore();
const router = useRouter();

const addTransaction = () => {
  if (validator()) {
    console.log("form", form);
    mainStore.addTransaction({ ...form, user: form.user.label });
    const payload = {
      type: form.type.value,
      title:
        form.type.value === "credit"
          ? "You settled amount"
          : "You added transaction",
      amount: form.amount,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    };
    mainStore.addActivity(payload);
    router.push({ path: "/dashboard" });
  }
};
</script>
