<script setup lang="ts">
const route = useRoute()
const { data: contact } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('/contact').first()
})

useSeoMeta({
  title: contact.value?.title,
  description: contact.value?.description,
});
</script>
<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1>{{ contact.title }}</h1>
      </template>

      <ContentRenderer v-if="contact" :value="contact" class="flow content-grid" />
    </UCard>
  </UContainer>
</template>
