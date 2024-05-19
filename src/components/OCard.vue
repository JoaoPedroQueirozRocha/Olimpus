<template>
	<div class="rounded-2xl p-4" :style="{ backgroundColor: props.color }">
		<slot />
	</div>
</template>

<script lang="ts" setup>
/**
 * @prop {string} color - The color of the card
 * @prop {string} name - The name of the card
 */
const props = withDefaults(
	defineProps<{
		name?: string;
		color?: string;
	}>(),
	{ color: '#fff' }
);
</script>
