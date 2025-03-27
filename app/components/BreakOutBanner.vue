<template>
	<section v-once>
		<div class="px-6 md:px-12 py-14" :class="colorClass">
			<AppTypography tag="h2" variant="heading-variable" class="">
				<slot mdc-unwrap="p" name="quote" />
			</AppTypography>

			<!-- <AppTypography tag="p" variant="text">
				<slot mdc-unwrap="p" name="subtitle" />
			</AppTypography> -->
		</div>
	</section>
</template>

<script setup lang="ts">
	defineOptions({ name: 'BreakOutBanner' })

	const props = defineProps<{
		color?: string
	}>()

	const colorClass = useColorClass(props.color)
</script>

<style scoped></style>
