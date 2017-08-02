import Vue from 'vue';
import Router from 'vue-router';
import UserIndex from '@/screens/User/components/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: UserIndex,
    },
  ],
});
