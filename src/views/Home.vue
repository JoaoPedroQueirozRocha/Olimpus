<template>
	<div class="flex flex-col gap-6 w-full h-full">
		<div class="flex flex-col gap-6 w-[100%]">
			<h1 class="title">{{ t('home.title') }}</h1>
			<hr class="w-full h-[2px] bg-black" />
		</div>
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi autem tenetur magni odio debitis
			minus, veritatis sapiente illo cum sint corrupti. Totam cum mollitia quibusdam reprehenderit accusantium
			odit harum.
		</div>
		<div class="flex flex-col">
			<OCard color="gray">
				<div class="w-[100%] self-center flex flex-row gap-6 flex-wrap">
					<OCard
						v-for="(card, index) in cards"
						:key="index"
						:color="card.color"
						class="card"
						@click="handleCard(card.name)"
					>
						<div class="flex flex-col items-center">
							<OIcon :name="card.icon"></OIcon>
							<div class="text-xl font-bold">{{ card.name }}</div>
						</div>
					</OCard>
				</div>
			</OCard>
		</div>
	</div>
</template>

<script lang="ts">
import OButton from '@/components/OButton.vue';
import OIcon from '@/components/OIcon.vue';
import OCard from '@/components/OCard.vue';
import ORoundButton from '@/components/ORoundButton.vue';
import ORoundMenu from '@/components/ORoundMenu.vue';
import OSideBar from '@/components/OSideBar.vue';
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
	components: {
		OButton,
		OIcon,
		OCard,
		ORoundButton,
		ORoundMenu,
		OSideBar,
	},
	setup() {
		const cards = reactive([
			{ name: 'Athena', color: String('#73ccff'), icon: 'history_edu' },
			{ name: 'Hades', color: String('#360aa6'), icon: 'diamond' },
			{ name: 'Chronos', color: String('#494875'), icon: 'hourglass' },
		]);
		const { t } = useI18n({ useScope: 'global' });
		return {
			t,
			cards,
		};
	},

	methods: {
		handleCard(name: string) {
			switch (name) {
				case 'athena':
					this.$router.push('/athena');
					break;
				case 'hades':
					this.$router.push('/hades');
					break;
				case 'chronos':
					this.$router.push('/chronos');
					break;
				default:
					break;
			}
		},
	},
};
</script>

<style>
.card {
	color: white;
	width: 6em;
}

.card:hover {
	transform: scale(1.2);
	transition: all 0.5s ease;
	cursor: pointer;
}
</style>
