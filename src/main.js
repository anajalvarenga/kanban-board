import { createApp } from 'vue'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BoardColumn from './components/board/BoardColumn.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BoardColumn', BoardColumn);

app.mount('#app');
