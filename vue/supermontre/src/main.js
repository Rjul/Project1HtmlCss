
import RootComponent from './App.vue'
import router from './router'
import { createApp } from 'vue'
import store from './store'

const app = createApp(RootComponent);

app.use(store);
app.use(router);
app.mount('#app');

