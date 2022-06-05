<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h2
      class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200"
    >
      Groups
    </h2>
    <p class="leading-relaxed mb-1 text-gray-600 dark:text-gray-200">
      Add peoples in listed groups or create new group using "Create Group"
    </p>
    <div class="py-4 flex items-center justify-between">
      <div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Search for items"
            v-model="search"
          />
        </div>
      </div>
      <div>
        <bl-button
          color="info"
          label="Create Group"
          class="px-6"
          @click="onAddGroup"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Members</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(group, idx) in getGroups"
          :key="idx"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap capitalize"
          >
            {{ group.name }}
          </th>
          <td class="px-6 py-4 capitalize">{{ group.type }}</td>
          <td class="px-6 py-4 capitalize">{{ group.members?.length }}</td>
          <td class="px-6 py-4 capitalize">{{ group.status }}</td>
          <td class="px-6 py-4 capitalize">
            <bl-button
              :disabled="group.status.toLowerCase() === 'inactive'"
              type="submit"
              color="info"
              outline
              label="Add Peoples"
              class="px-6"
              @click="[(modalVisible = true), (activeGrp = group)]"
            />
          </td>
        </tr>
        <tr
          class="w-full text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-600 dark:text-gray-400"
          v-if="getGroups.length === 0"
        >
          <td class="py-10" colspan="7">No items found</td>
        </tr>
      </tbody>
    </table>
    <bl-modal
      v-if="modalVisible"
      :isVisible="modalVisible"
      @cancel="modalVisible = false"
    >
      <template #title>
        <p class="text-base dark:text-gray-300">Add User in group</p>
      </template>
      <template #body>
        <div class="flex flex-col">
          <div class="text-lg dark:text-gray-300 my-6">
            Group Name:
            <span class="font-semibold">{{ activeGrp?.name }}</span>
          </div>
          <bl-field label="User *" help="Please select user">
            <bl-control
              v-model="user"
              type="select"
              name="user"
              :options="users"
              autocomplete="user"
            />
          </bl-field>
          <bl-button
            type="submit"
            color="info"
            label="Add User"
            class="px-6 mt-5"
            @click="onAddUser"
          />
        </div>
      </template>
    </bl-modal>
  </div>
</template>

<script setup>
import blButton from "../components/blButton.vue";
import blModal from "../components/blModal.vue";
import BlField from "../components/blField.vue";
import blControl from "../components/blControl.vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/stores/main";
import { computed, ref } from "vue";
const mainStore = useMainStore();
const search = ref(null);
const getGroups = computed(() => {
  if (!search.value) {
    return mainStore.getGroups;
  } else {
    return mainStore.getGroups.filter(({ name, type, status }) => {
      return Object.values({ name, type, status }).some((word) =>
        String(word).toLowerCase().includes(search.value)
      );
    });
  }
});

const users = computed(() => mainStore.getUsers);
const modalVisible = ref(false);
const activeGrp = ref(null);
const user = ref(null);
const router = useRouter();
const onAddGroup = () => {
  router.push({ path: "/add-group" });
};
const onAddUser = () => {
  if (user.value && user.value !== "") {
    const payload = {
      type: "user",
      title: "you added a user in group",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    };
    mainStore.addActivity(payload);
    mainStore.addGroupMember(activeGrp.value.id, user.value.label);
    modalVisible.value = false;
    activeGrp.value = null;
    user.value = null;
  }
};
</script>
