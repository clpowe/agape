<script setup lang="ts">
import AgapeLogo from "~/assets/icons/agape-logo.svg";

const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AgapeLogo class="w-auto h-6 shrink-0" />
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

<style>
.logo {
  height: 2.5rem;
}
</style>
