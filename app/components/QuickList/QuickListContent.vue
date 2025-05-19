<script setup>
import QuickItem from "./QuickItem.vue";

defineProps({
	items: { type: Array },
});
</script>

<template>
  <ul class="">
    <QuickItem v-for="item in items" :key="item.title" :item="item" />
  </ul>
</template>

<style scoped>
ul {
  grid-column: 1/-1;
  grid-template-columns: 1fr;

  display: grid;
  gap: var(--space-m);
}

@media (min-width: 416px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 750px) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
