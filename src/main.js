import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import webStyle from './sass/style.sass'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init();

app.use(router).use(AOS).use(VuePlyr, {
    plyr: {}
  }).mount('#app');
