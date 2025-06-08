<script setup lang="ts">

const { data } = useAsyncData("faq-questions", () =>
	queryCollection("frequently_asked_questions").all(),
);


</script>

<template>
	<div class="accordion">
		<div class="">
			<details v-for="question in data" :key="question.id">
				<summary>{{ question.question }}</summary>
				<p>{{ question.answer }}</p>
			</details>
		</div>
	</div>
</template>

<style scoped></style>
