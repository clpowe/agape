<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <UPage>
    <ContentRenderer v-if="home" :value="home" class="flow content-grid" />
  </UPage>
</template>
