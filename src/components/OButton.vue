<template>
	<button
		:id="id"
		:name="name"
		:type="type"
		class="o-button text-xs relative inline-flex min-h-[3em] min-w-[1em] cursor-pointer items-center justify-center rounded-lg py-[1em] px-[2em] font-bold tracking-wider uppercase select-none active:scale-95 leading-[1em]"
		:class="[{ secondary, disabled, small, 'pointer-events-none': isLoading }, variant]"
	>
		<template v-if="$slots.default">
			<label v-if="name || id">
				<slot />
			</label>
			<div v-else class="label">
				<slot />
			</div>
		</template>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * @prop {string} [id]
 * @prop {string} [name]
 * @prop {'button' | 'reset' | 'submit'} [type='button']
 * @prop {'primary' | 'negative' | 'positive' | 'info' } [variant='primary'] Define a variante do botão.
 * @prop {boolean} [secondary=false] - Define se o botão é secundário.
 * @prop {boolean} [small=false] - Define se o botão é pequeno.
 * @prop {boolean} [disabled=false] - Desabilita o botão se verdadeiro.
 * @prop {boolean} [loading=false] - Mostra o estado de carregamento se verdadeiro.
 * @prop {number} [progress=0] - O progresso do carregamento do botão, de 0 a 100.
 */
const props = withDefaults(
	defineProps<{
		id?: string;
		name?: string;
		type?: 'button' | 'reset' | 'submit';
		variant?: 'primary' | 'negative' | 'positive' | 'info';
		secondary?: boolean;
		small?: boolean;
		disabled?: boolean;
		loading?: boolean;
		progress?: number;
	}>(),
	{
		type: 'button',
		variant: 'primary',
		progress: 0,
	}
);

const isLoading = computed((): boolean => !!(props.progress > 0 || props.loading));
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

.primary {
	@apply text-white bg-primary hover:bg-heavy-orange;
}

.negative {
	@apply text-white bg-negative hover:bg-heavy-red;
}

.positive {
	@apply text-white bg-positive hover:bg-heavy-green;
}

.info {
	@apply text-white bg-info hover:bg-heavy-cyan;
}

.secondary {
	@apply bg-transparent border-[.175em] border-current;
}

.secondary.primary {
	@apply text-primary hover:bg-primary hover:text-white;
}

.secondary.negative {
	@apply text-negative hover:bg-negative hover:text-white;
}

.secondary.positive {
	@apply text-positive hover:bg-positive hover:text-white;
}

.secondary.info {
	@apply text-info hover:bg-info hover:text-white;
}

.label {
	@apply inline-flex items-center justify-center gap-x-1.5;
}
</style>
