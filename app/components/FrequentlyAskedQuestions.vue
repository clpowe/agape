<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const { data } = useAsyncData("faq-questions", () =>
	queryCollection("frequently_asked_questions").all(),
);

// Map the fetched data to the UAccordion expected items structure
const items = computed<AccordionItem[]>(() => {
	return (
		data.value?.map((item) => ({
			label: item.question, // Map 'question' to 'label'
			content: item.answer, // Map 'answer' to 'content'
			value: item.answer, // Use the Nuxt Content path as a unique value if available, otherwise use item.id
		})) || []
	);
});
</script>

<template>
	<div>
		AccordionItem
	</div>
	<!-- <UAccordion v-if="items.length > 0" :items="items" type="single" :collapsible="true" class="">
		<template #default="{ item }">
			<AppTypography tag="h3" variant="faq-text" class="" :is-bold="true" :is-strong="true">
				{{ item.label }}
			</AppTypography>
		</template>
</UAccordion> -->
</template>
