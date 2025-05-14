<script setup lang="ts">
import { computed } from 'vue'
import { useAsyncData, useScroll } from '#imports'
import AgapeLogo from '~/assets/icons/agape-logo.svg'

const { data: items } = await useAsyncData('navigation-items', () => {
  return queryCollection('navigation').all()
})

const { y } = useScroll(window)
const scrollThreshold = 50
const isScrolled = computed(() => y.value > scrollThreshold)
</script>

<template>
  <UHeader
    class="h-[--ui-header-height] sticky top-0 z-50 transition-[width] transition-[top] duration-400 ease"
    :class="{
      'backdrop-blur border-b border-default w-1/2 mx-auto top-4 rounded-full': isScrolled
    }"
  >
    <template #left>
      <NuxtLink to="/">
        <AgapeLogo class="w-14 h-14 transition-all duration-300" :font-controlled="false" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<style scoped>
.logo {
  height: 2.5rem;
}

.scrolled .agape-logo {
  height: 2rem;
  width: 2rem;
}
</style>
