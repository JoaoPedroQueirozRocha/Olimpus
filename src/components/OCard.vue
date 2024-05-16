<template>
	<div class="bg-white rounded-2xl">
		<slot />
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		name?: string;
	}>(),
	{}
);
</script>
