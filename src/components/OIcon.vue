<template>
	<span class="material-symbols-rounded o-icon" :class="{ unfilled: unfilled }">
		{{ name }}
	</span>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		name?: String;
		size?: string;
		unfilled?: boolean;
		type?: string;
	}>(),
	{
		unfilled: false,
		size: '24px',
	}
);
</script>

<style lang="scss">
@import '@/assets/vars.scss';

.material-symbols-rounded {
	user-select: none;
	font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.material-symbols-rounded.unfilled {
	font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.b-icon.material-symbols-rounded {
	font-size: v-bind(size);
}
</style>
