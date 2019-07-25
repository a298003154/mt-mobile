import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Button = () => import('../src/packages/button/demo/index.vue');

export default new Router({
  routes: [
    {
      path: '/button',
      component: Button,
    }
  ]
});
