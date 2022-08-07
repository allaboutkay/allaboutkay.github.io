import { createRouter, createWebHashHistory } from "vue-router";
import store from './../loading'
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

const router = createRouter({
  history: createWebHashHistory(),
  // mode: "hash",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

router.beforeEach(function (to, from, next) {
  store.commit('setLoading', {isLoading: true})
  store.commit('setLoaded', {isLoaded: false})
  next()
})

router.afterEach(function (to) {
  
  setTimeout(function () {
    store.commit('setLoaded', {isLoaded: true})
  },800)

  setTimeout(function(){
    store.commit('setLoading', {isLoading: false})
  },1200)
})

export default router;

