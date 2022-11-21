<template>
    <li>
        <h4>{{ cardData.title }}</h4>
        <p>{{ cardData.description }}</p>
    </li>
</template>

<script>
export default {
    props: ['cardData']
}
</script>

<style scoped>
li {
    background-color: rgba(95, 158, 160, 0.25);
    padding: 16px;
    border-radius: 8px;
    margin: 4px;
}
</style>