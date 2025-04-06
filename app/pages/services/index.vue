<script setup lang="ts">
const { data } = await useAsyncData("home", () =>
  queryCollection("content").path("/services").first()
);

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>
