import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueKatex from "vue-katex";
import IdleVue from "idle-vue";
const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 10000
});
Vue.use(VueKatex);
Vue.use(Vuelidate);

const baseUrl = env => {
  if (env === "development") {
    return (axios.defaults.baseURL = "http://localhost:3000");
  }

  return (axios.defaults.baseURL = "https://www.eulerkids.com/");
};

baseUrl(process.env.NODE_ENV);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
