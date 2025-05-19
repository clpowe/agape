<script setup lang="ts">
const { data: contact } = await useAsyncData(() =>
	queryCollection("content").path("/contact").first(),
);

useSeoMeta({
	title: contact.value?.title,
	description: contact.value?.description,
});
</script>
<template>
  <UPageBody>
    <ContentRenderer
      v-if="contact"
      :value="contact"
      class="flow content-grid"
    />
  </UPageBody>
</template>
