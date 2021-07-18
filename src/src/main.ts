import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PirmeVue from "primevue/config";

createApp(App).use(router).use(PirmeVue).mount("#app");
