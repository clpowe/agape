<script setup>
const { items } = defineProps({
  items: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="">
    <ItemListContent :items="items" />
  </div>
</template>
