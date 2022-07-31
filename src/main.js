import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import webStyle from './sass/style.sass'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import GooeyCursor from 'vue-gooey-cursor'

export const app = createApp(App)
app.AOS = new AOS.init();


app.component('GooeyCursor', GooeyCursor)

app.use(router).use(AOS).use(VueLoading).use(VuePlyr, {
    plyr: {}
  }).mount('#app');
