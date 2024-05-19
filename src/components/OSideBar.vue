<template>
	<div class="sidebar-holder" :class="{ closed: !isExpanded, mobile: isPhone }">
		<OIcon
			class="sidebar-expande-icon top-3 left-4 fixed"
			:name="isExpanded ? 'close' : 'menu'"
			@click="adaptHeight(!isExpanded)"
			v-if="isPhone"
		/>
		<div class="sidebar" ref="sidebar" :class="{ closed: !isExpanded, mobile: isPhone }">
			<div class="flex flex-col justify-between" ref="content">
				<div class="flex items-center gap-2 mb-2" v-if="!isPhone">
					<img
						src="/images/logo.png"
						alt="Logo"
						class="w-[70px]"
						@click="
							() => {
								router.push('/');
							}
						"
					/>
				</div>
				<router-link
					@click="isPhone && adaptHeight(!isExpanded)"
					class="option"
					:class="{ active: getMenuOption === option.value, 'justify-center': !isExpanded }"
					v-for="option in options"
					:to="option.value"
					:key="option.path"
				>
					<OIcon :name="option.icon" />
					<span v-if="isExpanded">{{ option.text }}</span>
				</router-link>
			</div>
			<OIcon
				@click="changeExpanded(!isExpanded)"
				name="chevron_right"
				class="arrow"
				:class="[isExpanded ? 'rotate-180' : 'ml-2']"
				style="font-size: 50px"
				v-if="!isPhone"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import OIcon from '@/components/OIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
	name: 'Menu',
	components: { OIcon },
	emits: ['update:isMenuOpened'],
	setup() {
		const isPhone = ref(window.innerWidth <= 768);
		const isExpanded = ref(!isPhone);
		const sidebar = ref();
		const options = ref([
			{
				text: 'Hades',
				value: 'hades',
				path: '/hades',
				icon: 'diamond',
			},
			{
				text: 'Chronos',
				value: 'chronos',
				path: '/chronos',
				icon: 'hourglass_bottom',
			},
			{
				text: 'Athena',
				value: 'athena',
				path: '/athena',
				icon: 'history_edu',
			},
		]);
		return {
			router: useRouter(),
			sidebar,
			isPhone,
			isExpanded,
			options,
		};
	},

	computed: {
		getMenuOption() {
			if (this.$route.path.includes('hades')) return 'hades';
			if (this.$route.path.includes('chronos')) return 'chronos';
			if (this.$route.path.includes('athena')) return 'athena';
			return 'profile';
		},
	},
	beforeMount() {
		window.addEventListener('resize', this.handleResize);
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.handleResize);
	},

	methods: {
		handleResize() {
			this.isPhone = window.innerWidth <= 768;
			if (this.isPhone) {
				this.sidebar.style.height = '0';
			} else {
				this.sidebar.style.height = '100vh';
			}
		},
		changeExpanded(value: any) {
			this.isExpanded = value;
			this.$emit('update:isMenuOpened', value);
		},
		adaptHeight(value: boolean) {
			this.isExpanded = value;
			let height = 0;
			if (value) {
				const topbar = document.querySelector('.top-holder');
				const windowHeight = window.innerHeight;
				height = windowHeight - this.sidebar.scrollHeight;
			}
			this.sidebar.style.height = `${height}px`;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';

.sidebar {
	position: fixed;
	bottom: 0;
	left: 0;
	min-width: 260px;
	max-width: 260px;
	box-shadow: $shadow-menu;
	background: $gray-100;
	padding: 1em;
	height: 100vh;
	overflow: hidden;
	user-select: none;
	transition: min-width 0.5s ease, width 0.5s ease, max-width 0.5s ease;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.sidebar-holder {
	min-width: 260px;
	max-width: 260px;
	transition: min-width 0.5s ease, width 0.5s ease, max-width 0.5s ease;
}

.sidebar-holder.closed {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-width: 100px;
	max-width: 100px;
}

.sidebar-holder.mobile {
	min-width: 0px !important;
	max-width: 0px !important;
}

.sidebar.closed {
	min-width: 100px;
	max-width: 100px;
}

.sidebar.mobile {
	position: fixed;
	z-index: 90;
	bottom: 0;
	min-width: 100%;
	max-width: none;
	transition: height 0.5 ease;
}

.menu.mobile.closed {
	padding: 0em;
	height: 0;
}

.logo {
	height: 80px;
	width: 80px;
}

.logo-text {
	width: 120px;
}

.option {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0.3em 0.5em;
	border-radius: 16px;
	color: $orange-100;
	font-weight: 600;
	font-size: 22px;
	cursor: pointer;
	user-select: none;
	margin-top: 2em;

	&:hover {
		color: $heavy-primary;
		background: $orange-100;

		img {
			filter: invert(71%) sepia(93%) saturate(3265%) hue-rotate(1deg) brightness(97%) contrast(98%);
		}
	}

	img {
		width: 40px;
		filter: invert(22%) sepia(17%) saturate(2775%) hue-rotate(123deg) brightness(98%) contrast(102%);
	}
}

.option.active {
	background: $heavy-primary;
	color: white;
	img {
		filter: invert(100%);
	}

	&:hover {
		background: $heavy-primary;
		color: white;
		img {
			filter: invert(100%);
		}
	}
}

.material-symbols-rounded {
	font-size: 40px;
}

.arrow {
	@apply ease-in-out duration-300 cursor-pointer w-fit;
	color: $ciano-100;
}

.menu-expand-icon {
	z-index: 90;
	color: $heavy-cyan;
}
</style>
