<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
	queryCollection("content").path(route.path).first(),
);

useSeoMeta({
	title: data.value?.title,
	description: data.value?.description,
});
</script>

<template>
	<div>
		<NuxtImg :src="data?.meta.image" width="300" height="400" format="avif" />
		<ContentRenderer v-if="data" :value="data" />
	</div>
</template>
