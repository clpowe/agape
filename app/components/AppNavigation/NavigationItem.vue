<script setup lang="ts">
import { NavigationMenuLink } from "reka-ui";

defineProps<{
    title: string;
}>();
</script>

<template>
    <li>
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
    </li>
</template>

<style scoped>
:deep(.NavigationMenuLink) {
    display: block;
    text-decoration: none;
    line-height: 1;
}

.title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
}

.details {
    font-size: 0.75rem;
    line-height: 1.25rem;
}
</style>