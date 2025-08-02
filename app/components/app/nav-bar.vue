<script setup lang="ts">
import { useNavigationItems } from '~/composables/useNavigationItems';

const { data: navigation } = await useNavigationItems();


</script>

<template>
    <UHeader>
        <template #left>
            <AppLogo />
        </template>

        <UNavigationMenu :items="navigation" />

        <template #right>
            <UButton label="Apply" to="/apply" />
        </template>
    </UHeader>
</template>
