<template>
    <div id="navbar">
        <div>
            <h5 class="text-white h4">Bill Counter</h5>
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Dashboard' }">
                        Dashboard
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="handleLogout">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import auth from "../../api/auth";

export default {
    methods: {
        handleLogout() {
            auth.logout().then(() => {
                localStorage.removeItem("auth");
                this.$router.push({ name: "Home" });
            });
        },
    },
};
</script>
