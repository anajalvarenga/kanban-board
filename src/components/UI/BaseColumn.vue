<template>
    <ul>
        <h3
            :style="{'background-color': columnData.color}"
        >
            {{ columnData.title }}
        </h3>
        <BaseCard
            v-for="card of columnData.cards"
            :key="card.title"
            :cardData="card"
        />
    </ul>
</template>

<script>
export default {
    props: ['columnData']
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0 8px;
    padding: 0;
    width: 25%;
    min-width: 200px;
}

h3 {
    border-radius: 8px;
    color: #fff;
    margin: 4px;
    padding: 16px;
}
</style>