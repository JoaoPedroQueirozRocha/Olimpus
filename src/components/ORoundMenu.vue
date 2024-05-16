<template>
	<div class="o-round-menu relative flex items-center h-fit w-fit overflow-visible">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="item"
			:class="{ 'z-10': isHovering[index] }"
			:style="
				isExpanded
					? {
							transform: `translate3d(${positions[index]})`,
							'-webkit-transform': `translate3d(${positions[index]})`,
					  }
					: {}
			"
			@mouseover="isHovering[index] = true"
			@mouseleave="isHovering[index] = false"
		>
			<ORoundButton :background="item.color" :icon="item.icon" :text="item.text" @click="item.action()" />
		</div>
		<div class="item" :class="{ 'z-20': !isExpanded }">
			<ORoundButton
				icon="hardware"
				:variant="!isExpanded ? 'primary' : 'negative'"
				:background="isExpanded ? '#d38200' : ''"
				@click="isExpanded = !isExpanded"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { transform } from 'typescript';
import { ref, watch, onBeforeMount } from 'vue';
import ORoundButton from './ORoundButton.vue';

const props = withDefaults(
	defineProps<{
		items: any[];
	}>(),
	{}
);

const isExpanded = ref(false);
const isHovering = ref<boolean[]>([]);
const positions = ref<string[]>([]);

onBeforeMount(() => {
	calculatePositions();
});

watch(props.items, () => {
	calculatePositions();
});

function calculateZ() {
	if (props.items.length < 7) {
		return 60;
	} else if (props.items.length < 10) {
		return 7 * props.items.length;
	} else {
		return 6 * props.items.length;
	}
}

function calculatePositions() {
	for (let i = 0; i < props.items.length; i++) {
		const angles = (i * 360) / props.items.length;
		const radians = (angles * Math.PI) / 180;

		const z = calculateZ();
		const y = z * Math.sin(radians);
		const x = z * Math.cos(radians);
		positions.value.push(`${x}px, ${y}px, 0`);
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';
.item {
	@apply absolute;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-webkit-transition: -webkit-transform ease-out 200ms;
	transition: -webkit-transform ease-out 200ms;
	transition: transform ease-out 200ms;
	transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.item {
	-webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
	transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}
</style>
