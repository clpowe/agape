<script setup lang="ts">
const { data } = await useAsyncData(() =>
  queryCollection("content").path("/student-portal").first()
);

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="data" :value="data" class="flow content-grid" />
</template>
