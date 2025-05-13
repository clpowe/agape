<script setup lang="ts">
import AgapeLogo from "~/assets/icons/agape-logo.svg";

const { data: items } = await useAsyncData(() => {
  return queryCollection("navigation").all();
});
</script>

<template>
  <div class="container">
<UHeader class="bg-muted">
    <template #left>
      <NuxtLink to="/">
        <AgapeLogo class="w-10 h-10" :font-controlled="false" />
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
  </div>
  
</template>

<style>
.logo {
  height: 2.5rem;
}
</style>
