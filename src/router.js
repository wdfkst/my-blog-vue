import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});
