<template>
	<main>
		<div class="h-full"></div>
		<OButton variant="positive" secondary> Teste </OButton>
		<OIcon name="add" />
	</main>
</template>

<script lang="ts">
import OButton from '@/components/OButton.vue';
import OIcon from '@/components/OIcon.vue';

export default {
	components: {
		OButton,
		OIcon,
	},
};
</script>
