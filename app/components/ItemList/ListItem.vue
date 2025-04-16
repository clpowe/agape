<script setup>
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <AppTypography
      tag="h3"
      variant="heading-xxs"
      class="mb-1"
      :is-bold="true"
      :is-strong="true"
    >
      {{ item.title }}
    </AppTypography>
    <AppTypography tag="p" variant="text-s">
      {{ item.description }}
    </AppTypography>
  </div>
</template>
