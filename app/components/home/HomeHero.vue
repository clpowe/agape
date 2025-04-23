<script setup lang="ts">
defineProps<{ img?: string; alt?: string }>();
</script>

<template>
  <section class="HomeHero">
    <div class="content-wrapper">
      <AppTypography
        tag="h2"
        variant="heading-variable-l"
        :is-bold="true"
        :is-strong="true"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <div class="main-content">
        <AppTypography tag="p" variant="text-variable-l">
          <slot name="description" />
        </AppTypography>
        <div class="actions">
          <slot mdc-unwrap="p" name="actions" />
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

.content-wrapper {
  display: grid;
  gap: var(--space-s);
  padding-block: var(--space-l);
}

.main-content {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}

.image {
  grid-column: span 2;
  img {
    width: 100%;
  }
}

.actions {
  margin-top: var(--space-s);
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}

@container (min-width: 350px) {
  .actions {
    margin-top: var(--space-s);
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
  }
}

@media (min-width: 700px) {
  .HomeHero {
  }
  .content-wrapper {
    grid-template-columns: 1fr 1fr;
    padding-block: var(--space-xxl);
  }
}
</style>
