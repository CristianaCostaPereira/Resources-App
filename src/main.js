import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import ErrorMessage from './components/UI/ErrorMessage.vue';


const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('error-message', ErrorMessage);

app.mount('#app');