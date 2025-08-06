<script setup lang="ts">

const { data } = await useAsyncData('student-portal', () => {
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
