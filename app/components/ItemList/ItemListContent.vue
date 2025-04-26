<script setup>
import ListItem from "./ListItem.vue";

defineProps({
  items: { type: Array },
});
</script>

<template>
  <ul class="grid gap-2">
    <!-- User List Empty -->
    <ListItem v-for="item in items" :key="item.title" :item="item" />
  </ul>
</template>
<style scoped>
ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
