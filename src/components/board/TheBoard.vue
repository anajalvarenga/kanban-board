<template>
    <main>
        <BaseColumn
            v-for="column in boardData"
            :key="column.id" :columnData="column"
            @drop="onDrop($event, column.id)"
            @dragover.prevent
            @dragenter.prevent
        />
    </main>
</template>

<script>
export default {
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
            ]
        };
    },
    computed: {
        boardData() {
            for(let column of this.columns) {
                column.cards = this.cards.filter(card => card.columnId === column.id)
            }
            return this.columns
        }
    },
    methods: {
        onDrop(ev, columnId) {
            const cardId = ev.dataTransfer.getData('cardId');
            const card = this.cards.find(card => card.id == cardId);
            card.columnId = columnId;
        }
    },
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
}
</style>