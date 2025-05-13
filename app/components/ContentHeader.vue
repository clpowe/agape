<script setup lang="ts">
defineProps<{
  img?: string;
  alt?: string;
}>();
</script>

<template>
  <section
    class=" mx-auto  py-16 sm:py-24 lg:py-32"
  >
    <div class="bg-muted rounded-4xl grid gap-1.5 sm:gap-6 md:gap-10 @container w-full max-w-(--ui-container) px-4 py-10 md:px-8 md:py-12">
      <div
        class="text-left md:text-center grid items-center gap-3 sm:gap-4 md:gap-6"
      >
        <div class="flex flex-col gap-2 items-center">
          <div class="bg-primary rounded-full py-1 px-3">
            <AppTypography
              v-if="$slots.eyebrow"
              tag="h2"
              variant="text-l"
              class="font-bold text-inverted dark:text-default"
            >
              <slot mdc-unwrap="p" name="eyebrow" />
            </AppTypography>
          </div>
          <AppTypography
            v-if="$slots.title"
            tag="h2"
            variant="heading-xl"
            class="font-bold text-default"
          >
            <slot mdc-unwrap="p" name="title" />
          </AppTypography>
        </div>
        <AppTypography
          v-if="$slots.description"
          tag="p"
          class="text-muted mx-auto max-w-2xl"
          variant="text-m"
        >
          <slot mdc-unwrap="p" name="description" />
        </AppTypography>
      </div>
      <div class="flex flex-col-reverse md:grid-cols-2 md:grid gap-8">
        <div class="@container" :class="img ? 'col-span-1' : 'col-span-1 md:col-span-2'"
        >
          <div v-if="$slots.content" class="grid gap-6">
            <slot name="content" />
            <AppTypography
              v-if="$slots.extra"
              tag="p"
              variant="text-m"
              class="text-muted"
            >
              <slot mdc-unwrap="p" name="extra" class="text-pretty"/>
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
    </div>
  </section>
</template>

<style scoped></style>
