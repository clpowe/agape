<script setup lang="ts" generic="T">
defineProps<{
  list: T[]
}>()
</script>

<template>
  <div>
    <div v-for="item in list" :key="item.title">
       <div
        class="item"
      >
        <!-- Badge -->
        <div >
          <div class="flex items-center gap-2 text-gray-900">
            <span class="inline-block size-3 rounded-sm bg-primary"/>
            <span class="font-medium text-lg ">{{ item.badge }}</span>
          </div>
        </div>

        <!-- Image + Copy -->
        <ULink
          :to="item.to"
          class=" items-center group"
        >
          <NuxtImg
            :src="item.image"
            class="rounded w-full aspect-[16/9] object-cover"
          />
        </ULink>

        <ULink
          :to="item.to"
          class=" grid gap-5 "
        >
          <div>
            <h3 class="text-3xl font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p  class="mt-2 text-balance text-gray-700">
              {{ item.description }}
            </p>
          </div>
        </ULink>

        <!-- Arrow -->
        <div class="md:flex md:justify-end">
          <UButton
            :to="item.to"
            icon="i-lucide-arrow-right"
            color="neutral"
            size="xl"
            class="rounded-full md:self-center transition-transform group-hover:translate-x-0.5 size-11 grid items-center"
            square
          />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  align-items: start;
  gap: 3rem;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  padding-top: 1.25rem;       
  padding-bottom: 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1); 

  @media (min-width: 768px) {
    grid-template-columns: 0.5fr 300px 1fr 0.3fr; /* md:grid-cols-[...] */
    padding-top: 1.5rem;       /* md:py-6 = 1.5rem top/bottom */
    padding-bottom: 1.5rem;
  }
}



</style>
