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

<style scoped></style>
