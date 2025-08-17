<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  description?: string
  image: string                 // background image url
  links?: Array<{
    label: string
    to?: string
    variant?: 'solid' | 'soft' | 'outline' | 'ghost' | 'link'
    icon?: string
    color?: 'primary' | 'neutral' 
  }>
}>(), {
  links: () => [],
  description: ''
})

</script>

<template>
  <section class="relative isolate grid content-end overflow-hidden min-h-[600px] md:min-h-[700px]">
    <!-- Background image -->
    <div
      class="absolute inset-0 -z-10"
      :style="`background:url('${image}') top/cover no-repeat`"
      aria-hidden="true"
    />
    <!-- Dark gradient for legibility -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

    <UContainer class="py-16 md:py-20">
      <div class="max-w-3xl">
        <h1 class="font-semibold tracking-tight text-white text-5xl md:text-7xl leading-tighter">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-5 text-white/90 text-lg md:text-xl">
          {{ description }}
        </p>

        <div v-if="links?.length" class="mt-8 flex flex-wrap gap-3">
          <UButton
            v-for="(l,i) in links"
            :key="i"
            :to="l.to"
            :variant="l.variant"
            size="xl"
            :color="l.color"
            class="font-medium"
            :icon="l.icon"
          >
            {{ l.label }}
          </UButton>
        </div>
      </div>

          </UContainer>
  </section>
</template>

