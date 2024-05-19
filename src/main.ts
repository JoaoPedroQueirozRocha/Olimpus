import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { i18nOptions } from './store/languageStore.js';

const app = createApp(App);

const i18n = createI18n(i18nOptions);

app.use(router).use(i18n);

app.mount('#app');
