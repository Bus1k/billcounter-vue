import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue';
import Login from './components/views/Login.vue';
import Register from './components/views/Register.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');