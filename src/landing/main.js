import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locale";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

i18n.global.locale = "ru";

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueGlide)
  .mount("#app");
