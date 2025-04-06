<script setup lang="ts">
const { data: teachers } = await useAsyncData(() =>
  queryCollection("teachers").all()
);

defineOptions({ name: "TeachersGrid" });

defineProps<{
  title?: string;
  description?: string;
  headline?: string;
}>();
</script>

<template>
  <UPageSection :title :description :headline>
    <UPageGrid
      class="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
    >
      <UCard v-for="(teacher, index) in teachers" :key="index">
        <NuxtImg
          :src="teacher.image"
          class="w-full"
          width="300"
          height="400"
          format="avif"
        />
        <template #footer>
          <UUser :name="teacher.name" size="xl" />
        </template>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
