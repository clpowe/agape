<script setup lang="ts">
const { data: contact } = await useAsyncData('contact', () => {
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
        <h1>{{ contact?.title }}</h1>
      </template>

      <ContentRenderer v-if="contact" :value="contact" class="flow content-grid" />
    </UCard>
  </UContainer>
</template>
