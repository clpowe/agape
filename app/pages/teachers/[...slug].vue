<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
	queryContent(route.path).findOne(),
);

useSeoMeta({
	title: data.value?.title,
	description: data.value?.description,
});
</script>

<template>
	<UContainer>
		<UCard>
			<template #header>
				<h1>{{ data.title }}</h1>
			</template>

			<NuxtImg :src="data?.meta.image" width="300" height="400" format="avif" />
			<ContentRenderer v-if="data" :value="data" />
		</UCard>
	</UContainer>
</template>
