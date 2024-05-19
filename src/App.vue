<template>
	<div class="grid-template" :class="{ small: expanded && !isPhone, 'is-phone': isPhone }">
		<OSideBar @update:isMenuOpened="changeExpanded" />
		<div class="md:mt-14 mt-20 w-full h-fit md:px-8 content pb-8">
			<router-view />
		</div>
		<div
			class="fixed z-50 ease-in-out duration-300"
			:style="{ bottom: menuExpanded ? '5.5rem' : '2.5rem', right: menuExpanded ? '9.8rem' : '2.5rem' }"
		>
			<ORoundMenu :items="items" @update:expanded="menuExpanded = $event" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import OSideBar from '@/components/OSideBar.vue';
import ORoundMenu from './components/ORoundMenu.vue';
import { ref } from 'vue';
const router = useRouter();
const items = ref([
	{
		icon: 'history_edu',
		text: 'Athena',
		color: '#73ccff',
		action: () => {
			router.push('/athena');
		},
	},
	{
		icon: 'diamond',
		text: 'Hades',
		color: '#360aa6',
		action: () => {
			router.push('/hades');
		},
	},
	{
		icon: 'hourglass',
		text: 'Chronos',
		color: '#494875',
		action: () => {
			router.push('/chronos');
		},
	},
]);
const isPhone = ref(false);
const expanded = ref(false);

const menuExpanded = ref(false);

const handleResize = () => {
	isPhone.value = window.innerWidth <= 768;
};
const changeExpanded = (value: boolean) => {
	expanded.value = value;
};
</script>

<style lang="scss">
@import '@/assets/vars.scss';

.body {
	font-family: 'Luxurious-Roman', cursive;
	padding: 0;
	overflow: hidden;
}

#app {
	overflow: auto;
}

.grid-template {
	@apply w-full h-screen;
	display: grid;
	grid-template-columns: min-content auto;
}

.grid-template.is-phone {
	display: flex !important;
}

.grid-template.small {
	grid-template-columns: min-content 84%;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

.title {
	@apply text-4xl font-bold mt-4;
}

.skeleton-card-title {
	width: 30%;
	margin-bottom: 8px;
}

.skeleton-card-content {
	width: 100%;
	height: 24px !important;
}

.skeleton {
	height: 14px;
	background: $gray-200;
	background: linear-gradient(90deg, transparent, $gray-200, transparent);
	background-size: 200% 100%;
	animation: moveBar 1.5s linear infinite;
}

@keyframes moveBar {
	0% {
		background-position: -100% 0;
	}
	100% {
		background-position: 100% 0;
	}
}

@media screen and (max-width: 768px) {
	.content {
		padding: 0 1em;
	}
}
</style>
