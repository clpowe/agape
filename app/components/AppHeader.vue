<script setup lang="ts">
const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});
</script>

<template>
  <UHeader>
    <template #title>Agape Christian Bar Prep </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
