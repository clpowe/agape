<script setup lang="ts">
const emit = defineEmits<{
    (e: 'myClick'): void;
}>();

function handleClick() {
    emit('myClick');
}
</script>

<template>
    <button>
        <slot mdc-unwrap="p" />
    </button>
</template>
