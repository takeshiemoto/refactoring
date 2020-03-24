import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import('../views/Heroes.vue')
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: () => import('../views/HeroDetail.vue')
  },
  {
    path: '/hero/new',
    name: 'HeroForm',
    component: () => import('../views/HeroForm.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
