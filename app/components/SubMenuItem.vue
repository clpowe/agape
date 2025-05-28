<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <li class="sub-menu-item">
        <NuxtLink role="menuitem" :to="to">
            <p class="label">
                <slot name="label" />
            </p>
            <p class="description">
                <slot name="description" />
            </p>
        </NuxtLink>
    </li>
</template>

<style scoped>
.sub-menu-item {

    a {
        text-decoration: none;
        color: inherit;
        background-color: var(--background-terciary);
    }


}
</style>