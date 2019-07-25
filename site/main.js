import Vue from 'vue';
import App from './App';
import router from './router';
import DemoBlock from './component/DemoBlock';
import DemoSection from './component/DemoSection';
import MT from '../src/packages';

Vue.config.productionTip = false;

Vue.component('demo-block', DemoBlock);
Vue.component('demo-section', DemoSection);

Vue.use(MT);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
