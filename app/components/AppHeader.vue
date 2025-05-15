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
    class="border-none bg-elevated w-full h-[--ui-header-height] py-1 mx-auto sticky top-0 z-50 transition-all duration-500 ease-(--easing)"
    :class="{
      'backdrop-blur border-b border-default w-1/2  top-4 rounded-full': isScrolled
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

.header {

}

.scrolled .agape-logo {
  height: 2rem;
  width: 2rem;
}
</style>
