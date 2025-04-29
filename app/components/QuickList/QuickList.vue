<script setup>
const { items } = defineProps({
  items: { type: Array, default: () => [] },
});
</script>

<template>
  <QuickListContent :items="items" />
</template>

<style scoped></style>
