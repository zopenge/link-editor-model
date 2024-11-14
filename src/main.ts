import { createApp } from 'vue';
import App from './App.vue';
import QuickBar from './components/QuickBar.vue';

const app = createApp(App);

app.component('QuickBar', QuickBar);

app.mount('#app'); 