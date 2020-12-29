<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
div .card {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    max-width: 90vw;
    min-height: 75vh;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>
