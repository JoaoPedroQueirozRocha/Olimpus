import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Chronos from '../views/Chronos/index.vue';
import Hades from '../views/Hades/index.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/chronos',
			name: 'chronos',
			component: Chronos,
		},
		{
			path: '/hades',
			name: 'hades',
			component: Hades,
		},
	],
});

export default router;
