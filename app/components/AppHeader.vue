<script setup lang="ts">
	const { data: items } = await useAsyncData(() => {
		return queryCollection('navigation').all()
	})
	console.log(items.value)
</script>

<template>
	<UHeader>
		<template #title> </template>
		<UNavigationMenu :items="items" />
	</UHeader>
</template>
