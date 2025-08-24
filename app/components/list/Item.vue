<script setup lang="ts">
  defineProps<{
    title: string,
    description: string
    icon: string,
    to: string
  }>()
</script>

<template>
  <div class="service-item">
    <div class="flex justify-between gap-2">
      <h3 class="text-2xl font-sans font-semibold text-gray-900">
      {{ title }}
      </h3>
      <UIcon :name="icon" class="size-5" />
    </div>
    <div>
    <p class="text-balance text-muted mb-3">
      {{ description }}
    </p>
      <UButton :to>
        Read More
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.service-item {
  grid-row-gap: 40px;
    background-color: var(--background-color-accented);
    border-radius: 5px;
    flex-flow: column;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
    padding: 20px;
    display: flex;
    position: relative;
}
</style>
