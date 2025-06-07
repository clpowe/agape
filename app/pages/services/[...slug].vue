<script setup lang="ts">
import CourseItem from '~/components/courses/CourseItem.vue';
const route = useRoute();

const { data: courses } = await useAsyncData(`courses-${route.path}`, () =>
	queryCollection("courses").where("program", "=", route.params.slug).all(),
);

const { data } = await useAsyncData(route.path, () =>
	queryCollection("content").path(route.path).first(),
);

// useSeoMeta({
// 	description: data.value?.description,
// });
</script>

<template>
	<div class="wrapper flow" data-width="wide">
		<ContentRenderer v-if="data" :value="data" class="flow content-grid" />
		<CourseItem v-for="course in courses" :key="course.id" :course="course" />
	</div>
</template>
