<script setup>
const { item } = defineProps({
  item: {
    type: Object,
  },
});
</script>
<template>
  <li class="link">
    <NuxtLink :to="item.link" rel="noopener noreferrer">
      <component
        :is="`svgo-${item.icon}`"
        class="w-16 h-16 item"
        :fontControlled="false"
      />
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
      <AppTypography tag="p" variant="text-s">Read more</AppTypography>
    </NuxtLink>
  </li>
</template>

<style scoped>
.link {
  outline: solid 3px var(--stroke-strong);
  padding: var(--space-s);
  border-radius: var(--space-s);
}

.item {
  color: var(--brand);
}
</style>
