<script setup lang="ts">
const route = useRoute()
const { data: about } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('/about').first()
})

useSeoMeta({
  title: about.value?.title,
  description: about.value?.description,
});
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1>{{ about?.title }}</h1>
      </template>

      <ContentRenderer v-if="about" :value="about" />
    </UCard>
  </UContainer>
</template>
