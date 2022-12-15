<template>
    <div @click="onClose()"></div>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script>
export default {
    emits: ['close'],
    methods: {
        onClose() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}

dialog {
    position: fixed;
    top: 20vh;
    width: 40%;
    z-index: 100;
    overflow: hidden;
    padding: 0;
    border: none;
    border-radius: 8px;
}
</style>