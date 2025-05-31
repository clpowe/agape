<script setup lang="ts">
defineProps<{
  img?: string;
  alt?: string;
  width?: 'narrow' | 'wide' | 'base';
  direction?: 'horizontal' | 'vertical';
  text?: 'left' | 'center' | 'right';
}>();
</script>

<template>
  <section class="section wrapper flow" data-width="wide">
    <div class="@container" :data-width="width" :data-direction="direction">
      <div class="heading" :data-text="text">
        <div class="flex flex-col gap-2 items-center">
          <div v-if="$slots.eyebrow" class="bg-primary rounded-full py-1 px-3">
            <AppTypography tag="p" variant="text-l" class="font-bold text-inverted dark:text-default">
              <slot mdc-unwrap="p" name="eyebrow" />
            </AppTypography>
          </div>
          <AppTypography v-if="$slots.title" tag="h2" variant="heading-xl" class="font-bold text-default">
            <slot mdc-unwrap="p" name="title" />
          </AppTypography>
        </div>
        <AppTypography v-if="$slots.description" tag="p" class="text-muted mx-auto max-w-2xl" variant="text-m">
          <slot mdc-unwrap="p" name="description" />
        </AppTypography>
      </div>
      <div class="flex flex-col-reverse md:grid-cols-2 md:grid gap-8">
        <div class="@container" :class="img ? 'col-span-1' : 'col-span-1 md:col-span-2'">
          <div v-if="$slots.content" class="">
            <slot name="content" />
            <AppTypography v-if="$slots.extra" tag="p" variant="text-m" class="text-muted">
              <slot mdc-unwrap="p" name="extra" class="text-pretty" />
            </AppTypography>
            <div v-if="$slots.actions">
              <slot name="actions" />
            </div>
          </div>
        </div>
        <div v-if="img" class="">
          <NuxtImg v-slot="{ src, isLoaded, imgAttrs }" :src="img" :alt="alt"
            class="h-full w-full object-cover rounded-3xl">
            <!-- Show the actual image when loaded -->
            <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
            <!-- Show a placeholder while loading -->
            <img v-else src="https://placehold.co/400x400" alt="placeholder">
          </NuxtImg>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
.heading {
  display: grid;
  gap: calc(var(--spacing) * 3);
  align-items: center;
  text-align: center;

  &[data-text="left"] {
    text-align: left;
  }

  @media(min-width: 600px) {
    gap: calc(var(--spacing) * 4);
  }

  @media(min-width: 800px) {
    gap: calc(var(--spacing) * 5);
  }
}
</style>
