import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/router.js';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const app = createApp(App);

app.use(Router);

app.mount('#app');