<script setup lang="ts">
defineProps<{ img?: string; alt?: string }>();
</script>

<template>
  <section class="hero section wrapper flow" data-width="wide">
    <div class="content" data-width="wide">
      <AppTypography tag="h2" variant="heading-variable-l" class="font-bold text-balance" :is-bold="true"
        :is-strong="true">
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <div class="main-content">
        <AppTypography tag="p" variant="text-variable-l">
          <slot mdc-unwrap="p" name="description" />
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
.hero {
  border-radius: var(--border-radius-3);
  padding: var(--space-m);
}

.content {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  grid-column: span 2;
  gap: var(--space-xs);

  @media (width > 440px) {
    gap: var(--space-sm);
  }
}

.main-content {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}


.actions {
  display: flex;
  flex-flow: row wrap;
  gap: var(--space-xs);

}

.image {
  grid-column: span 2;
  border-radius: var(--border-radius-2);
  overflow: hidden;

  img {
    max-inline-size: 100%;
    object-fit: cover;
    object-position: top;
    width: 100%;
  }
}
</style>
