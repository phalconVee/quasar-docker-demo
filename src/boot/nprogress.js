import Vue from "vue";
import NProgress from "vue-nprogress";

Vue.use(NProgress);

let nprogress = new NProgress({ trickleSpeed: 150 });

Vue.prototype.$nprogres = nprogress;

export { nprogress };
