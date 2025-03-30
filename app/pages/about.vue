<script setup lang="ts">
	const { data: about } = await useAsyncData(() =>
		queryCollection('content').path('/about').first()
	)

	useSeoMeta({
		title: about.value?.title,
		description: about.value?.description
	})
</script>

<template>
	<UContainer>
		<ContentRenderer v-if="about" :value="about" />
		<div v-else>Home not found</div>
	</UContainer>
</template>
