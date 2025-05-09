<script setup lang="ts">
	const { data: testimonials } = await useAsyncData(() =>
		queryCollection('testimonials').all()
	)

	defineOptions({ name: 'TestimonialsSection' })

	defineProps<{
		title?: string
		description?: string
		headline?: string
	}>()
</script>

<template>
	<section>
		<ContentHeader>
			<template #title> {{ title }} </template>
			<template #description> {{ description }} </template>
		</ContentHeader>
		<UCarousel
			v-slot="{ item }"
			:items="testimonials"
			loop
			:ui="{ item: 'basis-1/3' }"
		>
			<div>
				<AppTypography tag="p" variant="text-m" class="quote">
					{{ item.quote }}
				</AppTypography>
				<AppTypography
					tag="p"
					variant="text-l"
					:is-bold="true"
					:is-strong="true"
					>{{ item.name }}</AppTypography
				>
			</div>
		</UCarousel>
	</section>
</template>

<style scoped></style>
