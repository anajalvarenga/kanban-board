<template>
    <li>
        <slot>
            <h4 v-if="cardData && cardData.title">{{ cardData.title }}</h4>
            <p v-if="cardData && cardData.description">{{ cardData.description }}</p>
        </slot>
    </li>
</template>

<script>
export default {
    props: {
        cardData: { required: false }
    }
}
</script>

<style scoped>
li {
    background-color: rgba(95, 158, 160, 0.25);
    padding: 16px;
    border-radius: 8px;
    margin: 4px;
    list-style: none;
}
</style>