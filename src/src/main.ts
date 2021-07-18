import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PirmeVue from "primevue/config";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@/assets/destyle.css";
import "@/assets/mystyle.css";
import "bulma/css/bulma.min.css";

library.add(fas);

createApp(App)
  .use(router)
  .use(PirmeVue)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
