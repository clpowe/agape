<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first()
})

console.log(page.value)

const { data } = await useAsyncData(route.path, () => {
	return queryCollection('courses').where('program', '=', route.params.slug).all()
})



useSeoMeta({

});
</script>

<template>
	<UContainer>
		<UCard>
			<template #header>
				<!-- <h1>{{ data.title }}</h1> -->
			</template>
			<ContentRenderer v-if="page" :value="page" />
			{{ data }}
			<!-- <CourseItem v-for="course in courses" :key="course.id" :course="course" /> -->
		</UCard>
	</UContainer>
</template>
