<template>
	<main>
		<div class="h-40 bg-white w-[90vh]"></div>
		<ORoundMenu :items="items" />
	</main>
</template>

<script lang="ts">
import OButton from '@/components/OButton.vue';
import OIcon from '@/components/OIcon.vue';
// import OCard from '@/components/OCard.vue';
import ORoundButton from '@/components/ORoundButton.vue';
import ORoundMenu from '@/components/ORoundMenu.vue';
import { ref } from 'vue';
export default {
	components: {
		OButton,
		OIcon,
		// OCard,
		ORoundButton,
		ORoundMenu,
	},
	setup() {
		const items = ref([
			{ icon: 'hourglass', text: 'Send email', color: '#0057F4', action: function () {} },
			{ icon: 'schedule', text: 'Finish Automation', color: '#F03232', action: function () {} },
			{ icon: 'schedule', text: 'Wait', color: '#5C5C5C', action: function () {} },
			{ icon: 'history', text: 'Time condition', color: '#FF9654', action: function () {} },
			{ icon: 'add', text: 'Conditional', color: '#4A004F', action: function () {} },
			{ icon: 'new_label', text: 'Add tag', color: '#009BE4', action: function () {} },
			{ icon: 'label_off', text: 'Remove tag', color: '#F06158', action: function () {} },
			{ icon: 'add_circle', text: 'Trigger', color: '#7B61FF', action: function () {} },
			{ icon: 'call_split', text: 'Split', color: '#FFC500', action: function () {} },
		]);
		return {
			items,
		};
	},
};
</script>
