<script setup lang="ts">
import { NavigationMenuLink } from "reka-ui";

defineProps<{
    title: string;
}>();
</script>

<template>
    <NavigationMenuLink class="NavigationMenuLink" as-child>
        <NuxtLink v-bind="$attrs" class="ListItemLink">
            <p class="title">
                {{ title }}
            </p>
            <p class="details">
                <slot />
            </p>
        </NuxtLink>
    </NavigationMenuLink>
</template>

<style scoped>
:deep(.NavigationMenuLink) {
    display: block;
    text-decoration: none;
    line-height: 1;
    padding: var(--space-xs);
    border-radius: var(--border-radius-1);
}

.ListItemLink {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
}

:deep(.NavigationMenuLink:hover) {
    background-color: var(--background-secondary);
}

.title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
}

.details {
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-wrap: balance;
}
</style>