import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GuestView from "../views/guestView.vue";
import Login from "../views/loginView.vue";
import appLayout from "../layouts/appLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Guest",
      component: GuestView,
      children: [
        {
          path: "",
          name: "Login",
          component: Login,
        },
        {
          path: "/signup",
          name: "SignUp",
          component: () => import("../views/signupView.vue"),
        },
        {
          path: "/logout",
          name: "Logout",
          component: () => import("../views/logoutView.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "home",
      component: appLayout,
      children: [
        {
          path: "",
          name: "Dashboard",
          component: HomeView,
        },
        {
          path: "/groups",
          name: "Group",
          component: () => import("../views/groupsListView.vue"),
        },
        {
          path: "/add-group",
          name: "Add Group",
          component: () => import("../views/addGroup.vue"),
        },
        {
          path: "/settings",
          name: "Settings",
          component: () => import("../views/settingsView.vue"),
        },
        {
          path: "/invite",
          name: "Invite",
          component: () => import("../views/inviteView.vue"),
        },
        {
          path: "/expense",
          name: "Expenses",
          component: () => import("../views/expenseView.vue"),
        },
        {
          path: "/settle",
          name: "Settle",
          component: () => import("../views/settleView.vue"),
        },
      ],
    },
  ],
});

export default router;
