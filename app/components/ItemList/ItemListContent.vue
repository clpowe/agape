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
<style scoped></style>
