<template>
    <div id="register" class="text-center">
        <img class="pb-5" src="../assets/logo.svg" alt="" width="300" />
        <h1 class="h3 mb-3">Create Account</h1>
        <div class="register-form">
            <form
                @submit.prevent="createAccount"
                :class="errors.length > 0 ? 'was-validated' : ''"
            >
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        :class="errors.name ? 'is-invalid' : ''"
                        id="name"
                        placeholder="Name"
                        required
                        v-model="formData.name"
                    />
                    <label for="name">Name</label>
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        :class="errors.email ? 'is-invalid' : ''"
                        id="email"
                        placeholder="Email"
                        required
                        v-model="formData.email"
                    />
                    <label for="email">Email</label>
                    <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email[0] }}
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input
                        type="password"
                        class="form-control"
                        :class="errors.password ? 'is-invalid' : ''"
                        id="password"
                        placeholder="Password"
                        required
                        v-model="formData.password"
                    />
                    <label for="password">Password</label>
                    <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password[0] }}
                    </div>
                </div>

                <div class="form-floating mb-3">
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
                    <label for="passwordConfirmation">Confirm Password</label>
                    <div
                        class="invalid-feedback"
                        v-if="errors.password_confirmation"
                    >
                        {{ errors.password_confirmation[0] }}
                    </div>
                </div>

                <button class="btn btn-lg btn-primary btn-block">Create</button>
                <a href="/login">Back</a>
            </form>
        </div>
    </div>
</template>

<script>
import auth from "../api/auth";

export default {
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
                    this.$router.push({ name: "Login" });
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

<style></style>
