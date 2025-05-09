<script setup>
	import ListItem from './ListItem.vue'

	defineProps({
		items: { type: Array }
	})
</script>

<template>
	<ul class="grid grid-cols-1 @sm:grid-cols-2 gap-4">
		<!-- User List Empty -->
		<ListItem v-for="item in items" :key="item.title" :item="item" />
	</ul>
</template>
<style scoped></style>
