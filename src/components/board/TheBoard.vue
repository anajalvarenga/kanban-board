<template>
    <main>
        <BaseColumn
            v-for="column of boardData"
            :key="column.id" :columnData="column"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            boardData: [
                {
                    id: 1,
                    title: 'backlog',
                    color: '#541fc4',
                    cards: [{title: 'card 1', description: 'lorem'}]
                },
                {
                    id: 2,
                    title: 'to do',
                    color: '#35a1f4',
                    cards: [{title: 'card 2', description: 'lorem'}]
                },
                {
                    id: 3,
                    title: 'doing',
                    color: '#ffb001',
                    cards: [{title: 'card 3', description: 'lorem'}]
                },
                {
                    id: 4,
                    title: 'done',
                    color: '#43c466',
                    cards: [{title: 'card 4', description: 'lorem'}]
                },
            ],
        };
    }
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
}
</style>