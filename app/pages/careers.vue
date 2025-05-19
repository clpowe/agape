<script setup lang="ts">
const { data } = await useAsyncData(() =>
	queryCollection("content").path("/careers").first(),
);

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
  <div>
    <!-- Render content if data is available -->
    <ContentRenderer v-if="data" :value="data" class="flow content-grid" />

    <!-- Airtable embed iframe -->
    <iframe
      class="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shrTzhMuzpq3aoUVP?backgroundColor=gray"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="1028"
      style="background: transparent; border: 1px solid #ccc"
    />
  </div>
</template>
