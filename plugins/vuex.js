import { createStore } from "vuex";
import ls from "localstorage-slim";

const store = createStore({
  state() {
    return {
      isAuth: 0,
      loader: false,
      authData: {}
    };
  },
  mutations: {
    loaderStatus(state) {
      state.loader = state.loader ? false : true;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});