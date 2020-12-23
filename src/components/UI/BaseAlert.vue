<template>
    <div class="alert" :class="'alert-' + type" role="alert">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["type", "info"],
};
</script>
