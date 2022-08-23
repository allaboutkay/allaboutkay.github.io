import { createRouter, createWebHashHistory } from "vue-router";
import store from './../loading'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('./../views/HomePage.vue'),
  },
  {
    path: '/web-and-ui',
    name: 'web-and-ui',
    component: () => import('./../views/WebPage.vue'),
  },
  {
    path: '/detail/:type/:id',
    name: 'detail',
    component: () => import('./../views/PageDetail.vue'),
  },
  {
    path: '/graphic',
    name: 'graphic',
    component: () => import('./../views/GraphicPage.vue'),
  },
  {
    path: '/logo',
    name: 'logo',
    component: () => import('./../views/LogoPage.vue'),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

router.beforeEach(function (to, from, next) {
  store.commit('setLoading', {isLoading: true})
  store.commit('setLoaded', {isLoaded: false})
  next();
  
})

router.afterEach(function (to) {
  if(to.path === '/'){
    store.commit('setPath', {path: '/'})
    setTimeout(function () {
      store.commit('setLoaded', {isLoaded: true})
      import('aos').then(AOS => AOS.init());
    },3000)

    setTimeout(function(){
      store.commit('setLoading', {isLoading: false})
      
    },4000)
  }else{
    store.commit('setPath', {path: 'page'})
    setTimeout(function () {
      store.commit('setLoaded', {isLoaded: true})
    },400)

    setTimeout(function(){
      store.commit('setLoading', {isLoading: false})
      import('aos').then(AOS => AOS.init());
    },1200)
  }

  
})

export default router;

