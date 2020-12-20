import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/login',
            component: Login,
            name: "Home"
        },
        {
            path: '/login',
            component: Login,
            name: "Login"
        },
        {
            path: '/register',
            component: Register,
            name: "Register"
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: "Dashboard"
        }
    ]
});

export default router;