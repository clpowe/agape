<script setup lang="ts">
	const { data: items } = await useAsyncData(() => {
		return queryCollection('navigation').all()
	})
</script>

<template>
	<UHeader>
		<template #title>Agape Christian Bar Prep </template>
		<UNavigationMenu :items="items" />
	</UHeader>
</template>
