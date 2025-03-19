<script setup lang="ts">
	const links = ref([
		{
			label: 'Get started',
			to: '/getting-started',
			icon: 'i-lucide-square-play'
		},
		{
			label: 'Learn more',
			to: '/getting-started/theme',
			color: 'neutral',
			variant: 'subtle',
			trailingIcon: 'i-lucide-arrow-right'
		}
	])
</script>

<template>
	<UPageHero
		title="Ultimate Vue UI library"
		description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
		:links="links" />
</template>
