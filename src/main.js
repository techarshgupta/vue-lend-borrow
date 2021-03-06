import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import "./assets/css/app.scss";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
if (!localStorage.getItem("color-theme")) {
  localStorage.setItem("color-theme", "dark");
}
app.use(pinia);
app.use(router);

app.mount("#app");
