import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import vueHelmet from "vue-helmet/src/VueHelmet";


createApp(App)
    .use(router)
    .use(vueHelmet)
    .mount('#app')

///assets/js/main.js
