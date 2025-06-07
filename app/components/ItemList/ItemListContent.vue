<script setup>
import ListItem from "./ListItem.vue";

defineProps({
	items: { type: Array },
});
</script>

<template>
	<ul class="">
		<!-- User List Empty -->
		<ListItem v-for="item in items" :key="item.title" :item="item" />
	</ul>
</template>
<style scoped>
ul {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--space-m);
	padding: 0;

	@container (min-width: 384px) {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
