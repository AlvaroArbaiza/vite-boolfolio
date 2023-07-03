import { createApp } from 'vue';
// import './style.css'
import { router } from './router.js';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';

//importare bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


createApp(App).use(router).mount('#app')
