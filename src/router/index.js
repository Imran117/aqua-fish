import { createRouter, createWebHashHistory } from 'vue-router';

function load(component) {
  return () => import(`@/${component}.vue`);
}

const routerHistory = createWebHashHistory();
const routes = createRouter({
  history: routerHistory,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: load('views/Home'),
    },
    {
      path: '/product',
      component: load('views/Product'),
    },
    {
      path: '/info',
      component: load('views/Info'),
    },
    {
      path: '/quality',
      component: load('views/Quality'),
    },
    {
      path: '/comment',
      component: load('views/Comment'),
    },
    {
      path: '/product/start-feed',
      component: load('components/sections/Default-feed'),
    },
    {
      path: '/product/grocery-feed',
      component: load('components/sections/Grocery-feed'),
    },
    {
      path: '/product/producers-feed',
      component: load('components/sections/Producers-feed'),
    },
    {
      path: '/product/functional-feed',
      component: load('components/sections/Functional-feed'),
    },
    {
      path: '/product/organic-feed',
      component: load('components/sections/Organic-feed'),
    },
  ],
});

export default routes;
export const routerName = routerHistory.location;
