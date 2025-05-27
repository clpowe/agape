<script setup lang="ts">

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div>
    <ContentRenderer v-if="home" :value="home" class="flow content-grid" />
  </div>
</template>
