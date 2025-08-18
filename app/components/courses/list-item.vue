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
        class="grid items-start gap-12 md:grid-cols-[0.5fr_300px_1fr_0.3fr] py-5 md:py-5 border-t border-black/10"
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
          class=" items-center group"
        >
          <NuxtImg
            :src="image"
        width="300"
        height="180"
            class="rounded w-full   object-cover"
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
        <div class="md:flex md:justify-end">
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
