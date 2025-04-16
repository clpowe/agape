<script setup lang="ts">
const { data } = await useAsyncData("home", () =>
  queryCollection("content").path("/services").first()
);

useSeoMeta({
  description: data.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="data" :value="data" class="flow content-grid" />
</template>
