<script setup lang="ts">
defineProps<{
  img?: string;
  alt?: string;
}>();
</script>

<template>
  <section class="section @container">
    <div class="text-center">
      <AppTypography
        v-if="$slots.title"
        tag="h2"
        variant="heading-s"
        class="font-bold text-default"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <AppTypography
        v-if="$slots.description"
        tag="p"
        class="text-muted mx-auto max-w-3xl"
        variant="text-m"
      >
        <slot mdc-unwrap="p" name="description" />
      </AppTypography>
    </div>
    <div class="flex flex-col-reverse md:grid-cols-2 md:grid gap-8">
      <div class="content @container">
        <div v-if="$slots.content">
          <slot name="content" />
          <AppTypography
            v-if="$slots.extra"
            tag="p"
            variant="text-m"
            class="text-muted"
          >
            <slot mdc-unwrap="p" name="extra" />
          </AppTypography>
          <div v-if="$slots.actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
      <div v-if="img" class="">
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
      </div>
    </div>
  </section>
</template>

<style scoped></style>
