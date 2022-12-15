<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    /* align-self: flex-end; */
    background-color: rgba(95, 158, 160, 0.25);
    border: none;
    border-radius: 4px;
    color: rgb(64, 106, 107);
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 8px;
}

button:hover {
    background-color: rgba(95, 158, 160, 0.5);
}

button:active {
    background-color: rgba(95, 158, 160, 0.7);
}
</style>