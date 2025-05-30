<script setup>
import { Icon } from "@iconify/vue";

const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="bg-elevated rounded-2xl p-4 grid gap-2">
    <Icon v-if="item.icon" :name="item.icon" mode="svg" class="h-8 w-8 text-primary" />

    <div>
      <AppTypography tag="h3" variant="heading-xxs" class="mb-1 text-default font-bold">
        {{ item.title }}
      </AppTypography>
      <AppTypography tag="p" variant="text-s" class="text-muted text-pretty">
        {{ item.description }}
      </AppTypography>
    </div>
  </li>
</template>
