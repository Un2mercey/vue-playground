import router from '@/router';
import { createApp } from 'vue';
import { store } from '@/stores';
import App from './App.vue';
import './styles/index.scss';

const app = createApp(App);
app.use(router).use(store).mount('#app');
