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
      <NuxtImg :src="img" :alt="alt" format="avif" width="1000" height="500" />
    </div>
  </section>
</template>

<style scoped>
.HomeHero {
  display: grid;
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
  border-radius: var(--space-l);
  img {
    width: 100%;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

@container (min-width: 340px) {
  .actions {
    display: flex;
    flex-direction: row;
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
