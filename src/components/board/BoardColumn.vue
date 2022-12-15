<template>
    <ul>
        <h3
            :style="{'background-color': columnData.color}"
        >
            {{ columnData.title }}
        </h3>
        <BaseCard
            v-for="card in columnData.cards"
            :key="card.title"
            :cardData="card"
            draggable="true"
            @dragstart="onDragStart($event, card.id)"
            @click="onSelectCard(card.id)"
        />
    </ul>
</template>

<script>
export default {
    props: ['columnData'],
    emits: ['cardSelected'],
    methods: {
        onDragStart(ev, cardId) {
            ev.dataTransfer.dropEffect = 'move';
            ev.dataTransfer.effectAllowed = 'move';
            ev.dataTransfer.setData('cardId', cardId);
        },
        onSelectCard(cardId) {
            this.$emit('cardSelected', cardId);
        }
    }
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

button {
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
    border-radius: 8px!important;
    font-size: 16px;
    padding: 16px!important;
    margin: 4px;
}
</style>