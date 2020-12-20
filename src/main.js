import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Dashboard from './views/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/dashboard',
            component: Dashboard
        }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');