<template>
  <AddCard />
  <TheBoard />
</template>

<script>
import TheBoard from './components/board/TheBoard.vue';
import AddCard from './components/card/AddCard.vue';

export default {
    components: { TheBoard, AddCard }
}
</script>

<style>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
