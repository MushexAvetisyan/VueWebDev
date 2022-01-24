import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const bus = new Vue();

import uppercase from "@/Filters/uppercase_filter";
import truncate from "@/Filters/truncate_filter";


Vue.filter('toUppercase', uppercase);
Vue.filter('truncate', truncate);


new Vue({
  render: h => h(App),
}).$mount('#app')
