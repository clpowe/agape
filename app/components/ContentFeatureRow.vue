<script setup lang="ts">
const props = withDefaults(defineProps<{
  headline?: string
  title: string
  description?: string
  features: Array<{ title: string; description?: string; icon?: string }>
  links?: Array<{ label: string; to?: string; icon?: string; variant?: 'solid'|'outline'|'soft'|'ghost'|'link' }>
}>(), {
  features: () => [],
  links: () => []
})
</script>

<template>
  <section class="bg-[#FBF9EE] dark:bg-neutral-950">
    <UContainer class="py-14 md:py-20">
      <!-- Header -->
      <div class="max-w-3xl">
        <p v-if="headline" class="text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400">
          {{ headline }}
        </p>
        <h2 class="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-gray-950 dark:text-white">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-gray-700/90 dark:text-gray-300">
          {{ description }}
        </p>
        <div v-if="links.length" class="mt-6 flex flex-wrap gap-3">
          <UButton
            v-for="(l,i) in links"
            :key="i"
            :to="l.to"
            size="lg"
            color="black"
            :variant="l.variant || (i===0 ? 'solid' : 'outline')"
            :icon="l.icon || 'i-lucide-arrow-right'"
          >
            {{ l.label }}
          </UButton>
        </div>
      </div>

      <!-- Features -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
          v-for="(f,i) in features"
          :key="i"
          class="pt-6 border-t border-gray-200 dark:border-white/10"
        >
          <div class="flex items-start gap-3">
            <UIcon v-if="f.icon" :name="f.icon" class="size-6 text-yellow-500 shrink-0" />
            <h3 class="text-xl font-semibold text-gray-950 dark:text-white">
              {{ f.title }}
            </h3>
          </div>
          <p v-if="f.description" class="mt-3 text-gray-700/90 dark:text-gray-300">
            {{ f.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

