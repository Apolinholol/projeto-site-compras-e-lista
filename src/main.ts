import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Importando bootstrap e bootstrap-vue-next
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import BootstrapVueNext from 'bootstrap-vue-next';

// Criando o aplicativo e utilizando bootstrap-vue-next
createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVueNext)
  .mount('#app');