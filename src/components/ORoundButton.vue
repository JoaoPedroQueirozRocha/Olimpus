<template>
	<button
		:id="id"
		:name="name"
		:type="type"
		:disabled="disabled"
		class="o-action-button p-[.1em] cursor-pointer items-center font-bold tracking-wider uppercase select-none truncate"
		:class="[size, variant, { 'no-text': !text, disabled: disabled, 'always-open': alwaysOpen }]"
		:style="{
			background: background
				? isHovering
					? 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ' + background
					: background
				: '',
			'z-index': isHovering && !alwaysOpen ? '3000' : '',
		}"
		@mouseover="isHovering = true"
		@mouseout="isHovering = false"
	>
		<div
			class="flex items-center gap-1 item-icon"
			:class="{ 'gap-3': size === 'large', 'gap-2': size === 'medium' }"
		>
			<span class="text" v-if="text">{{ text?.toUpperCase() }}</span>
			<OIcon
				class="icon"
				:name="computedIcon"
				:icon="icon"
				:class="{ 'is-hovering': isHovering && !alwaysOpen }"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import OIcon from './OIcon.vue';
/**
 * @props {string} [id]
 * @props {string} [name]
 * @props {string} [text]
 * @props {string} [icon]
 * @props {string} [background]
 * @props {string} [type]
 * @props {string} [size]
 * @props {boolean} [disabled]
 * @props {boolean} [alwaysOpen]
 */
const props = withDefaults(
	defineProps<{
		id?: string;
		name?: string;
		text?: string;
		icon?: string;
		background?: string;
		type?: 'button' | 'submit';
		size?: 'small' | 'medium' | 'large';
		variant?: 'primary' | 'negative';
		disabled?: boolean;
		alwaysOpen?: boolean;
	}>(),
	{
		type: 'button',
		variant: 'primary',
		size: 'small',
		alwaysOpen: false,
	}
);

let isHovering = ref(false);
const computedIcon = computed((): String => {
	if (props.icon) return props.icon;
	else if (props.variant == 'negative') return 'close';
	return 'add';
});
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';

.o-action-button {
	color: white;
	position: relative;
	display: inline-flex;
	flex-direction: row-reverse;
	overflow: hidden;
}

.small {
	@apply p-[.25em];
	max-width: 1.7em;

	&:hover {
		max-width: 10em;
	}
	@apply text-xl rounded-[6em];

	.text {
		@apply text-2xl ml-[.1em] mr-[.3em];
	}
}

.medium {
	@apply text-3xl rounded-[6em];

	.icon {
		@apply text-[2.5em] ml-[.03em];
	}
}

.large {
	@apply text-5xl rounded-[10em];

	.icon {
		@apply text-[3.5em] ml-[.1em];
	}
}

.primary {
	@apply bg-primary text-white hover:bg-heavy-orange;
}

.no-text {
	@apply w-fit;
}

.icon {
	@apply duration-300;
}

.o-action-button {
	@apply duration-500 hover:max-w-[500px];
}

.icon.is-hovering {
	@apply rotate-[360deg] transition-transform;
}

.small .text {
	@apply text-xs;
}

.medium .text {
	@apply text-base;
}

.large .text {
	@apply text-xl;
}

.o-action-button.always-open {
	@apply w-fit max-w-none;

	.icon {
		@apply rotate-0;
	}
}
</style>
