<template>
	<div class="flex flex-col gap-6 w-[70vw] h-full">
		<div class="flex flex-col gap-6 w-[100%]">
			<h1 class="title">Welcome to Olimpus!</h1>
			<hr class="w-full h-[2px] bg-black" />
		</div>
		<div></div>
		<div class="flex flex-col">
			<OCard>
				<div class="w-[100%] self-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi autem tenetur magni odio
					debitis minus, veritatis sapiente illo cum sint corrupti. Totam cum mollitia quibusdam reprehenderit
					accusantium odit harum.
				</div>
			</OCard>
		</div>
	</div>
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
	setup() {},
};
</script>
