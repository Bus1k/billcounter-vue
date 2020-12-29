<template>
    <base-card id="login">
        <img src="../assets/logo.svg" alt="" width="300" />
        <h1>Please sign in</h1>
        <div class="login-form">
            <form @submit.prevent="handleLogin">
                <div class="form-control">
                    <input
                        type="email"
                        id="loginEmail"
                        placeholder="name@example.com"
                        required
                        v-model="formData.email"
                    />
                </div>

                <div class="form-control">
                    <input
                        type="password"
                        id="loginPassword"
                        placeholder="Password"
                        required
                        v-model="formData.password"
                    />
                </div>
                <div class="actions">
                    <base-button type="submit" classes="blue">
                        Sign in
                    </base-button>
                    <a href="/register">Create Account</a>
                </div>
            </form>
        </div>
        <div class="errors" v-if="errors">
            <ul v-for="error in errors" :key="error.message">
                <li>
                    {{ error }}
                </li>
            </ul>
        </div>
    </base-card>
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
            flashMsg: "",
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
        handleRegister() {},
    },
};
</script>

<style scoped>
img {
    align-self: center;
    margin: 2rem 0 2.8rem 0;
}

h1 {
    align-self: center;
    font-weight: 100;
    margin: 0 0 2rem 0;
}

div .login-form {
    align-self: center;
    width: 80%;
}

input {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    margin-bottom: 1.5rem;
    font-size: 20px;
}

input:focus {
    outline: none;
}

.actions {
    margin-top: 1.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.actions .btn {
    padding: 0.7rem;
}
.actions a {
    margin-top: 1rem;
}
</style>
