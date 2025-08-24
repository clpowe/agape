<script setup lang="ts">
defineProps<{
  badge:string
  to:string
  image:string
  title:string
  description:string
}>()
</script>


<template>
       <div
        class="item"
      >
        <!-- Badge -->
        <div >
          <div class="flex items-center gap-2 text-gray-900">
            <span class="inline-block size-3 rounded-sm bg-primary"/>
            <span class="font-medium text-lg ">{{ badge }}</span>
          </div>
        </div>

        <!-- Image + Copy -->
        <ULink
          :to="to"
          class="overflow-hidden w-full h-44 rounded  col-span-2 md:col-auto"
        >
          <NuxtImg
            :src="image"
            class="w-full h-full object-cover "
          />
        </ULink>

        <div class="flex flex-col gap-2 max-w-80">
          <ULink :to="to">
            <h3 class="title">
              {{ title }}
            </h3>
          </ULink>
            <p  class="text-balance text-muted">
              {{ description }}
            </p>
        </div>

        <!-- Arrow -->
        <div class="md:flex md:justify-end mt-auto md:mt-0 ml-auto">
          <UButton
            :to="to"
            icon="i-lucide-arrow-right"
            color="neutral"
            size="xl"
            
          />
        </div>
      </div>
</template>

<style scoped>
.item {
  display: grid;
  align-items: start;
  gap: 1rem;
  grid-template-columns: auto 1fr; 
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 1px solid var(--ui-border); 

  @media (min-width: 768px) {
    grid-template-columns: 0.5fr 300px 1fr 0.3fr; /* md:grid-cols-[...] */
    grid-template-rows: auto;
    grid-auto-columns: 1fr;
    padding-top: 1.5rem;       /* md:py-6 = 1.5rem top/bottom */
    padding-bottom: 1.5rem;
    gap: 2.5rem;
  }
}

.title {
  font-weight:600;
  font-size: 1.875rem;
  color: var(--ui-text-highlighted);
  line-height: 1.2em;
}



</style>>
