<script setup lang="ts">
defineProps<{
  img?: string;
  alt?: string;
}>();
</script>

<template>
  <section>
    <div class="content">
      <AppTypography
        tag="h2"
        variant="heading-s"
        :is-bold="true"
        :is-strong="true"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <AppTypography tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="description" />
      </AppTypography>
      <AppTypography tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="extra" />
      </AppTypography>
      <div>
        <slot name="actions" />
      </div>
    </div>
    <slot mdc-unwrap="p" class="list" name="content" />
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-l);
  align-items: center;
}
.content {
  display: grid;
  /* gap: var(--space-s); */
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
  section {
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
  section {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
