<script setup>
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>
<template>
  <li>
    <a :href="item.link" target="_blank" rel="noopener noreferrer">
      <component :is="item.icon" class="w-5 h-5" :fontControlled="false" />

      {{ item.title }}
    </a>
  </li>
</template>

<style scoped></style>
