<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('/student-portal').first()
})


useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1>{{ data?.title }}</h1>
      </template>
      {{ data }}
      <ContentRenderer v-if="data" :value="data" class="flow content-grid" />
    </UCard>
  </UContainer>
</template>
