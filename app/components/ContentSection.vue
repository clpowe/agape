<script setup lang="ts">
defineProps<{
	img?: string;
	alt?: string;
}>();
</script>

<template>
  <UPageSection orientation="horizontal" class="">
    <div class="content">
      <AppTypography
        v-if="$slots.title"
        tag="h2"
        variant="heading-s"
        :is-bold="true"
        :is-strong="true"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <AppTypography v-if="$slots.description" tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="description" />
      </AppTypography>
      <AppTypography v-if="$slots.extra" tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="extra" />
      </AppTypography>
      <div v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <slot mdc-unwrap="p" class="list" name="content" />
  </UPageSection>
</template>

<style scoped>
.section {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-l);
  align-items: start;
}
.content {
  display: grid;
  gap: var(--space-s);
  grid-column: 1/-1;
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  height: 100%;
  max-height: 500px;
}

:deep(ul) {
  grid-column: 1/-1;

  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (min-width: 800px) {
  .section {
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

@media (min-width: 975px) {
  .section {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
