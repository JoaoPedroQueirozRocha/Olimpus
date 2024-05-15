<template>
	<button
		:id="id"
		:name="name"
		:type="type"
		class="o-button text-xs relative inline-flex min-h-[3em] min-w-[1em] cursor-pointer items-center justify-center rounded-lg py-[1em] px-[2em font-bold] tracking-wider uppercase select-none active:scale-95 leading-[1em]"
		:class="[{ secondary, disabled, small }, variant]"
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
 * @prop {'primary' | 'negative' | 'positive' | 'dark-blue' | 'yellow'} [variant='primary'] Define a variante do botão.
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
		variant?: 'primary' | 'negative' | 'positive' | 'dark-blue' | 'yellow';
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

<style lang="scss">
@import '../assets/vars.scss';

.primary {
	background-color: $orange-100;
	@apply text-white;
}

.secondary {
	color: $orange-100;
	@apply bg-transparent border-[.175em] border-current;
}

.secondary .primary {
	@apply text-primary hover:bg-primary-orange hover:text-white;
}

.negative {
	background-color: $red-100;
	@apply text-white;
}

.label {
	@apply inline-flex items-center justify-center gap-x-1.5;
}
</style>
