<template>
    <div id="login" class="text-center">
        <img class="pb-5" src="../assets/logo.svg" alt="" width="300" />
        <h1 class="h3 mb-3">Please sign in</h1>
        <div class="login-form">
            <form @submit.prevent="handleLogin">
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="loginEmail"
                        placeholder="name@example.com"
                        required
                        v-model="formData.email"
                    />
                    <label for="loginEmail">Email address</label>
                </div>

                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="loginPassword"
                        placeholder="Password"
                        required
                        v-model="formData.password"
                    />
                    <label for="loginPassword">Password</label>
                </div>

                <button class="btn btn-lg btn-primary btn-block">
                    Sign in
                </button>
                <a href="/register">Create Account</a>
            </form>
        </div>
        <div class="errors" v-if="errors">
            <ul v-for="error in errors" :key="error.message">
                <li>
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import auth from "../api/auth";

export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
            errors: [],
        };
    },
    methods: {
        handleLogin() {
            auth.login(this.formData)
                .then(() => {
                    localStorage.setItem("auth", "true");
                    this.$router.push({ name: "Dashboard" });
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.errors = error.response.data;
                    }
                });
        },
    },
};
</script>

<style></style>
