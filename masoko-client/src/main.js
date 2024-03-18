import './assets/main.css'

// adding bootstrap to our app
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-vue/dist/bootstrap-vue.css";

// adding bootstrap icons and fontawesome
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')
