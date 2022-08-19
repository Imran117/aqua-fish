import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import InfoPage from '../views/Info.vue';
import ProductPage from '../views/Product.vue';
import QualityPage from '../views/Quality.vue';
import CommentPage from '../views/Comment.vue';
import {DefaultPage, } from "../components/sections";
const routerHistory = createWebHashHistory();
const routes = createRouter({
  history: routerHistory,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/product',
      component: ProductPage,
    },
    {
      path: '/info',
      component: InfoPage,
    },
    {
      path: '/quality',
      component: QualityPage,
    },
    {
      path: '/comment',
      component: CommentPage,
    },
  ],
});

const sortRoutes = createRouter({
  history: routerHistory,
  linkActiveClass: 'active', 
  routes: [
    {
      path: '/product/start-feed',
      component: 
    },
    {
      path: '/product/start-feed',
      component: 
    },
    {
      path: '/product/start-feed',
      component: 
    },
    {
      path: '/product/start-feed',
      component: 
    },
  ]
})

export default routes;
export const routerName = routerHistory.location;