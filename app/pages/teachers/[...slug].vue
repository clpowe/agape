<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first()
);

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>
