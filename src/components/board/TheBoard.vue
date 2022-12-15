<template>
    <BaseDialog v-if="dialogOpen" @close="closeDialog">
        <AddCard @cardCreated="cardAction" :cardData="selectedCard" />
    </BaseDialog>
    <header>
        <h1>kanban board</h1>
        <BaseButton @click="openDialog">+</BaseButton>
    </header>
    <main>
        <BoardColumn
            v-for="column in boardData"
            :key="column.id" :columnData="column"
            @drop="onDrop($event, column.id)"
            @dragover.prevent
            @dragenter.prevent
            @cardSelected="editCard"
        />
    </main>
</template>

<script>
import AddCard from '../card/AddCard.vue';

export default {
    components: { AddCard },
    data() {
        return {
            columns: [
                {
                    id: 0,
                    title: 'backlog',
                    color: '#541fc4',
                },
                {
                    id: 1,
                    title: 'to do',
                    color: '#35a1f4',
                },
                {
                    id: 2,
                    title: 'doing',
                    color: '#ffb001',
                },
                {
                    id: 3,
                    title: 'done',
                    color: '#43c466',
                },
            ],
            cards: [
                {
                    id: 0,
                    columnId: 0,
                    title: 'card 1',
                    description: 'lorem'
                },
                {
                    id: 1,
                    columnId: 1,
                    title: 'card 2',
                    description: 'lorem'
                },
                {
                    id: 2,
                    columnId: 2,
                    title: 'card 3',
                    description: 'lorem'
                },
                {
                    id: 3,
                    columnId: 3,
                    title: 'card 4',
                    description: 'lorem'
                },
            ],
            dialogOpen: false,
            selectedCard: null,
        };
    },
    computed: {
        boardData() {
            for(let column of this.columns) {
                column.cards = this.cards.filter(card => card.columnId === column.id)
            }
            return this.columns
        },
        cardAction() {
            if(this.selectedCard) {
                return ($event) => this.handleEditedCard($event);
            }
            return ($event) => this.handleCreatedCard($event);
        }
    },
    methods: {
        onDrop(ev, columnId) {
            const cardId = ev.dataTransfer.getData('cardId');
            const card = this.cards.find(card => card.id == cardId);
            card.columnId = columnId;
        },
        openDialog() {
            this.dialogOpen = true;
        },
        closeDialog() {
            this.dialogOpen = false;
            this.selectedCard = null;
        },
        handleCreatedCard(event) {
            const newCard = {
                id: this.cards.length,
                columnId: 0,
                title: event.cardTitle,
                description: event.cardDescription
            };
            this.cards.push(newCard);
            this.dialogOpen = false;
        },
        editCard(cardId) {
            this.selectedCard = this.cards[cardId];
            this.dialogOpen = true;
        },
        handleEditedCard(event) {
            const editedCard = {
                id: this.selectedCard.id,
                columnId: this.selectedCard.columnId,
                title: event.cardTitle,
                description: event.cardDescription
            };
            this.cards[this.selectedCard.id] = editedCard;
            this.selectedCard = null;
            this.dialogOpen = false;
        },
    },
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: #541fc4;
    margin: 0 12px 8px 12px;
    padding: 0 16px;
    border-radius: 8px;
}

button {
    color: #fff!important;
    font-size: 1rem;
}

main {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
}
</style>