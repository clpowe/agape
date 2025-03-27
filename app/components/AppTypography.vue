<script setup lang="ts">
	type Variant =
		| 'heading'
		| 'heading-large'
		| 'heading-medium'
		| 'heading-small'
		| 'text'
		| 'heading-variable-large'
		| 'heading-variable'

	const props = defineProps<{
		tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
		variant: Variant
	}>()

	const VARIANT_CLASSES: Record<Variant, string> = {
		heading: 'heading',
		'heading-variable': 'heading-variable',
		'heading-large': 'heading-large',
		'heading-medium': 'heading-medium',
		'heading-small': 'heading-small',
		'heading-variable-large': 'heading-variable-large',
		text: 'text'
	}

	const variantClass = computed(() => {
		return VARIANT_CLASSES[props.variant]
	})
</script>
<template>
	<component :is="tag" :class="variantClass">
		<slot />
	</component>
</template>

<style scoped>
	.heading-variable-large {
		font-size: clamp(2rem, 1px + 3.5vw, 4.5rem);
		line-height: 0.9;
		font-family: var(--font-crimson);
	}
	/* .header2 {
		@apply text-5xl font-gilda text-balance mb-4 leading-tight;
	}

	.header2-lg {
		@apply text-4xl md:text-6xl font-gilda text-balance mb-4 leading-tight;
	}

	.heading-variable-large {
		@apply text-h1clamp leading-none font-crimson text-balance font-light;
	}
*/
	.heading-variable {
		font-size: clamp(2rem, 1px + 3.5vw, 4.5rem);
		line-height: 0.9;
		font-family: var(--font-crimson);
	}
	/*
	.heading-small {
		@apply text-xl md:text-3xl font-crimson text-balance leading-tight font-light;
	}

	.heading {
		@apply text-5xl font-crimson text-balance leading-tight font-light;
	}

	.heading-medium {
		@apply text-3xl md:text-3xl font-crimson text-balance leading-tight font-light;
	}

	.heading-large {
		@apply text-4xl md:text-6xl font-crimson text-balance leading-tight font-light;
	} */
</style>
