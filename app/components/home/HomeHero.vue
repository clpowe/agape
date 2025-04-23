<script setup lang="ts">
defineProps<{ img?: string; alt?: string }>();
</script>

<template>
  <section class="HomeHero">
    <div class="content">
      <AppTypography
        tag="h2"
        variant="heading-variable-l"
        :is-bold="true"
        :is-strong="true"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <div>
        <AppTypography tag="p" variant="text-variable-l">
          <slot name="description" />
        </AppTypography>
        <div class="actions">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <div class="image">
      <NuxtImg :src="img" :alt="alt" format="avif" />
    </div>
  </section>
</template>

<style scoped>
.HomeHero {
  display: grid;
  gap: var(--space-l);
}

.content {
  display: grid;
  gap: var(--space-s);
  padding-block: var(--space-l);
}

.image {
  grid-column: span 2;

  img {
    width: 100%;
  }
}

@media (min-width: 700px) {
  .HomeHero {
  }
  .content {
    grid-template-columns: 1fr 1fr;
    padding-block: var(--space-xxl);
  }
}
</style>
