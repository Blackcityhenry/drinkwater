import { createApp } from 'vue'
import router from './router';
import './style.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia';
import App from './App.vue'

const pinia = createPinia();

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
