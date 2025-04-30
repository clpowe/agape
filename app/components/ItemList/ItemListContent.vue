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
:deep(ul) {
  grid-column: 1/-1;

  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (min-width: 800px) {
  section {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .content {
    grid-column: span 3;
  }

  :deep(ul) {
    grid-column: span 4;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
} */
</style>
