import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

jest.fn();
declare module "vue/types/vue" {
  interface Vue {
    $myInjectedFunction(message: string): void;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $myInjectedFunction(message: string): void;
  }
}

new Vue({
  render: h => h(App)
}).$mount("#app");
