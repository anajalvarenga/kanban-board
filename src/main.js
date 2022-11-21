import { createApp } from 'vue'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseColumn from './components/UI/BaseColumn.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseColumn', BaseColumn);

app.mount('#app');
