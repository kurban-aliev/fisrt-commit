// import Vue from "vue";
// import Vuex from "vuex"
// import post from "./modules/post"

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     post,
//   },
// });

import { createStore } from "vuex";
import { post } from "./modules/post";

export default createStore({
  modules: {
    //Vuex позволяет нам разделить наш магазин на модули . Каждый модуль может содержать свое состояние, мутации, действия, геттеры и даже вложенные модули
    post: post,
  },
});
