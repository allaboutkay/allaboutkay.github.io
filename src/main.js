import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import webStyle from './sass/style.sass'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App).use(router).use(VuePlyr, {
    plyr: {}
  }).mount('#app');
