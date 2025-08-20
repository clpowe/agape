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
          class=" items-center group col-span-full md:col-span-1"

        >
          <NuxtImg
            :src="image"
        width="300"
        height="180"
            class="rounded w-full object-cover max-h-52 md:max-h-80 "
          /></ULink>

        <ULink
          :to="to"
          class=" grid gap-5 "
        >
          <div>
            <h3 class="text-3xl font-semibold text-gray-900">
              {{ title }}
            </h3>
            <p  class="mt-2 text-balance text-gray-700">
              {{ description }}
            </p>
          </div>
        </ULink>

        <!-- Arrow -->
        <div class="md:flex md:justify-end mt-auto md:mt-0">
          <UButton
            :to="to"
            icon="i-lucide-arrow-right"
            color="neutral"
            size="xl"
            class="rounded-full md:self-center transition-transform group-hover:translate-x-0.5 size-11 grid items-center"
            square
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
  border-top: 1px solid rgba(0, 0, 0, 0.1); 

  @media (min-width: 768px) {
    grid-template-columns: 0.5fr 300px 1fr 0.3fr; /* md:grid-cols-[...] */
    padding-top: 1.5rem;       /* md:py-6 = 1.5rem top/bottom */
    padding-bottom: 1.5rem;
    gap: 3rem;
  }
}



</style>>
