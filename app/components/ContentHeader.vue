<script setup lang="ts">
defineProps<{
  img: string;
  alt: string;
}>();
</script>

<template>
  <section>
    <div>
      <div class="mb-4">
        <AppTypography
          tag="h2"
          variant="heading-s"
          :is-bold="true"
          :is-strong="true"
          class="mb-2"
        >
          <slot mdc-unwrap="p" name="title" />
        </AppTypography>
        <AppTypography tag="p" variant="text-m">
          <slot mdc-unwrap="p" name="description" />
        </AppTypography>
      </div>

      <slot name="content" />
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
  gap: var(--space-m);
  align-items: center;
}
.image {
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
}

@media (min-width: 500px) {
  .image {
    height: 560px;
  }
}

@media (min-width: 775px) {
  section {
    grid-template-columns: 1fr 1fr;
  }

  .image {
    height: auto;
  }
}
</style>
