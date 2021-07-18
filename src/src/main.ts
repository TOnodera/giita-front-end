import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PirmeVue from "primevue/config";
import "bulma/css/bulma.min.css";

createApp(App).use(router).use(PirmeVue).mount("#app");
