<script setup>
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="bg-elevated rounded-2xl p-4 grid gap-1">
    <UIcon v-if="item.icon" :name="item.icon" class="size-14" />

    <div>
      <AppTypography
        tag="h3"
        variant="heading-xxs"
        class="mb-1 text-default font-bold"
      >
        {{ item.title }}
      </AppTypography>
      <AppTypography tag="p" variant="text-s" class="text-muted">
        {{ item.description }}
      </AppTypography>
    </div>
  </li>
</template>
