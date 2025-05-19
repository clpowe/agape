<script setup>
const { items } = defineProps({
	items: { type: Array, default: () => [] },
});
</script>

<template>
  <ItemListContent :items="items" />
</template>

<style scoped>
:deep(ul) {
  list-style-type: none;
}
</style>
