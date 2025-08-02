<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
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
