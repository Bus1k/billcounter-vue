<template>
    <section class="login text-center">
        <div class="form-login">
            <img class="pb-5" src="../assets/logo.svg" alt="" width="300">

            <h1 class="h3 mb-3">Please sign in</h1>

            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

            <button class="btn btn-lg btn-primary">Sign in</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
      }
    },
    methods: {
        handleLogin () {
            const formData = {
                email: this.email,
                password: this.password
            }

            console.log(formData);
        }
    }
}
</script>

<style>

</style>