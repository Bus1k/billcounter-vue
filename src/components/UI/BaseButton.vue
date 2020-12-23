<template>
    <button :type="type" class="btn" :class="classes">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ["type", "classes"],
};
</script>
