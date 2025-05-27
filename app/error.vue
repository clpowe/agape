<script setup lang="ts">
import type { NuxtError } from "#app";
import { NuxtLink } from "#components";

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
