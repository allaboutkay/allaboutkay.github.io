import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('./../views/HomePage.vue'),
  },
  {
    path: '/web-and-ui',
    component: () => import('./../views/WebPage.vue'),
  },
  {
    path: '/detail/:type/:id',
    component: () => import('./../views/PageDetail.vue'),
  },
  {
    path: '/graphic',
    component: () => import('./../views/GraphicPage.vue'),
  },
  {
    path: '/logo',
    component: () => import('./../views/LogoPage.vue'),
  },
  
];


export default createRouter({
    history: createWebHashHistory(),
    // mode: "hash",
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },
});

