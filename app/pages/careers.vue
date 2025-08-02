<script setup lang="ts">

import CareerForm from '~/components/Careers/CareerForm.vue';
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
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
    <UCard>
      <template #header>
        <h1>{{ data.title }}</h1>
      </template>

      <ContentRenderer v-if="data" :value="data" class="flow content-grid" />

      <CareerForm />

      <iframe class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrTzhMuzpq3aoUVP?backgroundColor=gray" frameborder="0" onmousewheel=""
        width="100%" height="1028" style="background: transparent; border: 1px solid #ccc" />
    </UCard>
  </UContainer>
</template>
