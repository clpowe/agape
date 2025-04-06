<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  image?: string;
}>();
</script>

<template>
  <UPageHero :title :description>
    <NuxtImg :src="image" class="w-full" />
  </UPageHero>
</template>
