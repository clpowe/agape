<script setup>
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="flex">
    <div>
      <div class="i-lucide:badge-check icon" />
    </div>
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
  </li>
</template>

<style scoped>
.icon {
  margin-right: var(--space-xxs);
  color: var(--brand);
}
</style>
