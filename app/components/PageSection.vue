<script setup lang="ts">
	defineProps({
		title: {
			type: String,
			default: 'Default title'
		},
		description: {
			type: String,
			default: 'Default description'
		},
		icon: {
			type: String,
			default: 'IconMarkdown'
		}
	})
</script>

<template>
	<div>
		{{ title }}
		{{ description }}
	</div>
</template>
