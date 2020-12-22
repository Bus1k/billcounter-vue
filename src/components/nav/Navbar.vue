<template>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
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
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
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
