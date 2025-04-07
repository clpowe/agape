<script setup lang="ts">
const { data: about } = await useAsyncData(() =>
  queryCollection("content").path("/apply").first()
);

useSeoMeta({
  title: about.value?.title,
  description: about.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="about" :value="about" />
</template>
