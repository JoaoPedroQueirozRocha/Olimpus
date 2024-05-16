<template>
	<main class="flex items-center justify-center flex-row h-full w-full">
		<OSideBar />
		<OCard class="bg-white w-[90vh] h-[50vh] flex items-center justify-center flex-row rounded">
			<ORoundMenu :items="items" />
		</OCard>
	</main>
</template>

<script lang="ts">
import OButton from '@/components/OButton.vue';
import OIcon from '@/components/OIcon.vue';
import OCard from '@/components/OCard.vue';
import ORoundButton from '@/components/ORoundButton.vue';
import ORoundMenu from '@/components/ORoundMenu.vue';
import OSideBar from '@/components/OSideBar.vue';
import { ref } from 'vue';
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
		const items = ref([
			{ icon: 'history_edu', text: 'Athena', color: '#73ccff', action: function () {} },
			{ icon: 'diamond', text: 'Hades', color: '#360aa6', action: function () {} },
			{ icon: 'hourglass', text: 'Chronos', color: '#494875', action: function () {} },
		]);
		return {
			items,
		};
	},
};
</script>
