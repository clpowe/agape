<script setup lang="ts">
	import HeroComp from '../components/Home/HeroComp.vue'
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
		<HeroComp />
		<ContentRenderer v-if="about" :value="about" />
		<div v-else>Home not found</div>
	</UContainer>
</template>
