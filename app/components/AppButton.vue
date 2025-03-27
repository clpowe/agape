<script setup lang="ts">
	defineProps<{
		color:
			| 'primary'
			| 'error'
			| 'secondary'
			| 'neutral'
			| 'success'
			| 'info'
			| 'warning'

		size: 'xs' | 'sm' | 'md' | 'lg'
	}>()
</script>

<template>
	<UButton :color="color" :size="size" class="rounded-full">
		<slot mdc-unwrap="p" />
	</UButton>
</template>
