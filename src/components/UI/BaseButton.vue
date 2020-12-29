<template>
    <button class="btn" :class="classes">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ["classes"],
};
</script>

<style scoped>
button {
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}
.blue {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
</style>
