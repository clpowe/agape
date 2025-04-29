<script setup lang="ts">
defineProps<{
  img?: string;
  alt?: string;
}>();

const breakpoints = useBreakpoints(
  {
    mobile: 0, // optional
    tablet: 600,
    desktop: 1024,
  },
  {
    ssrWidth: 0,
  }
);

const activeBreakpoint = breakpoints.active();

const ratio = computed(() => {
  switch (activeBreakpoint.value) {
    case "mobile":
      return 1.5;
    case "tablet":
      return 2.1;
    case "desktop":
      return 1.25;
    default:
      return 1;
  }
});
</script>

<template>
  <section>
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
      <div v-if="$slots.content">
        <slot name="content" />
      </div>
      <AppTypography v-if="$slots.extra" tag="p" variant="text-m">
        <slot mdc-unwrap="p" name="extra" />
      </AppTypography>
      <div v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="img" class="image">
      <AspectRatio :ratio="ratio">
        <NuxtImg
          v-slot="{ src, isLoaded, imgAttrs }"
          :src="img"
          :alt="alt"
          class="h-full w-full object-cover rounded-3xl"
        >
          <!-- Show the actual image when loaded -->
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />

          <!-- Show a placeholder while loading -->
          <img v-else src="https://placehold.co/400x400" alt="placeholder" />
        </NuxtImg>
      </AspectRatio>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-l);
  align-items: start;
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

@media (min-width: 525px) {
  section {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .content {
    grid-column: span 4;
  }

  .image {
    grid-column: span 4;
  }
}

@media (min-width: 1024px) {
  section {
    grid-template-columns: repeat(5, 1fr);
  }

  .content {
    grid-column: span 2;
  }

  .image {
    display: block;
    grid-column: span 3;
    height: 100%;
  }
}
</style>
