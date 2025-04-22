<script setup lang="ts">
defineProps<{
  img: string;
  alt: string;
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
      <div>
        <slot name="content" />
      </div>
      <AppTypography tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="extra" />
      </AppTypography>
      <div>
        <slot name="actions" />
      </div>
    </div>
    <NuxtImg
      v-if="img"
      v-slot="{ src, isLoaded, imgAttrs }"
      :src="img"
      :alt="alt"
      width="488"
      height="560"
      class="image"
    >
      <!-- Show the actual image when loaded -->
      <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />

      <!-- Show a placeholder while loading -->
      <img v-else src="https://placehold.co/400x400" alt="placeholder" />
    </NuxtImg>
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
  gap: var(--space-s);
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  height: 100%;
  max-height: 500px;
}

@media (min-width: 800px) {
  section {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .content {
    grid-column: span 2;
  }

  .image {
    grid-column: span 2;
  }
}

@media (min-width: 975px) {
  section {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .content {
    grid-column: span 4;
  }

  .image {
    grid-column: span 3;
    height: 100%;
  }
}
</style>
