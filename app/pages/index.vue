<script setup lang="ts">
	import HeroComp from '../components/Home/HeroComp.vue'
	const { data: home } = await useAsyncData(() =>
		queryCollection('content').path('/').first()
	)

	useSeoMeta({
		title: home.value?.title,
		description: home.value?.description
	})
</script>

<template>
	<UContainer>
		<HeroComp />
		<ContentRenderer v-if="home" :value="home" />
		<div v-else>Home not found</div>
		<UButton color="primary">Button</UButton>
	</UContainer>
</template>
