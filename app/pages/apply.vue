<script setup lang="ts">

const { data } = await useAsyncData('apply', () => {
  return queryCollection('content').path('/apply').first()
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

      <ContentRenderer v-if="data" :value="data" class="flow content-grid" />
    </UCard>
  </UContainer>
</template>
