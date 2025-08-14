<script setup lang="ts">
const { data: home,error } =  useAsyncData('home', () =>  queryCollection('content').path('/').first())

if (error.value) {
  console.error('Content loading error:', error.value)
}

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,

});

</script>

<template>
  <UContainer>
      <ContentRenderer v-if="home" :value="home" />
  </UContainer>
</template>
