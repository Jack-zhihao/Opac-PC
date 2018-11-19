import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Egrid from "egrid";
import VeRing from "v-charts/lib/ring.common";
import VeBar from 'v-charts/lib/bar.common'
import "element-ui/lib/theme-chalk/index.css";
import echarts from 'echarts'

import {post,fetch,patch,put} from '@/server'
//定义全局变量

Vue.prototype.$globalURL = "/api";

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Egrid);
Vue.component(VeRing.name, VeRing);
Vue.component(VeBar.name, VeBar);


Vue.prototype.$echarts=echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");