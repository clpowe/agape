<script setup lang="ts">

const { data } = await useAsyncData('careers', () => {
  return queryCollection('content').path('/careers').first()
})

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <UContainer>

      <ContentRenderer v-if="data" :value="data" class="flow content-grid" />

      <CareersForm />

  </UContainer>
</template>
