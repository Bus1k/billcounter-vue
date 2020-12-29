<template>
    <base-card id="register">
        <img class="pb-5" src="../assets/logo.svg" alt="" width="300" />
        <h1 class="h3 mb-3">Create Account</h1>
        <div class="register-form">
            <form
                @submit.prevent="createAccount"
                :class="errors.length > 0 ? 'was-validated' : ''"
            >
                <div class="form-control">
                    <input
                        type="text"
                        class="form-control"
                        :class="errors.name ? 'is-invalid' : ''"
                        id="name"
                        placeholder="Name"
                        required
                        v-model="formData.name"
                    />
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>

                <div class="form-control">
                    <input
                        type="email"
                        class="form-control"
                        :class="errors.email ? 'is-invalid' : ''"
                        id="email"
                        placeholder="Email"
                        required
                        v-model="formData.email"
                    />
                    <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email[0] }}
                    </div>
                </div>

                <div class="form-control">
                    <input
                        type="password"
                        class="form-control"
                        :class="errors.password ? 'is-invalid' : ''"
                        id="password"
                        placeholder="Password"
                        required
                        v-model="formData.password"
                    />
                    <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password[0] }}
                    </div>
                </div>

                <div class="form-control">
                    <input
                        type="password"
                        class="form-control"
                        :class="
                            errors.password_confirmation ? 'is-invalid' : ''
                        "
                        id="passwordConfirmation"
                        placeholder="Confirm Password"
                        required
                        v-model="formData.password_confirmation"
                    />
                    <div
                        class="invalid-feedback"
                        v-if="errors.password_confirmation"
                    >
                        {{ errors.password_confirmation[0] }}
                    </div>
                </div>
                <div class="actions">
                    <base-button type="submit" classes="blue">
                        Create
                    </base-button>
                    <a href="/login">Back</a>
                </div>
            </form>
        </div>
    </base-card>
</template>

<script>
import auth from "../api/auth";
import BaseButton from "../components/UI/BaseButton.vue";

export default {
    components: { BaseButton },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            errors: [],
        };
    },
    methods: {
        createAccount() {
            auth.create(this.formData)
                .then(() => {
                    this.$router.push({
                        name: "Login",
                        query: { msg: "registerSuccess" },
                    });
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        this.errors = error.response.data.error;
                    }
                });
        },
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
    margin: 0 0 1rem 0;
}

div .register-form {
    align-self: center;
    width: 80%;
}

input {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    margin-top: 1.5rem;
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

.invalid-feedback {
    color: red;
    font-size: 0.8rem;
}
</style>
