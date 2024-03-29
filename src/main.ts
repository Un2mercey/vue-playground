import { createApp } from 'vue';
import App from './App.vue';
import setupComponents from './components/global';
import router from './router';
import './styles/index.scss';

const app = createApp(App);
setupComponents(app);
app.use(router).mount('#app');
