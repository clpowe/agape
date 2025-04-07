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
  <div :title :description :headline>
    <AppTypography tag="p" variant="text">{{ title }}</AppTypography>
    <AppTypography tag="h2" variant="heading-variable">{{
      headline
    }}</AppTypography>
    <AppTypography tag="p" variant="text">{{ description }}</AppTypography>
    <div
      class="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
    >
      <NuxtLink
        v-for="(teacher, index) in teachers"
        :key="index"
        :to="`/teachers/${teacher.slug}`"
      >
        <NuxtImg
          :src="teacher.image"
          class="w-full"
          width="300"
          height="400"
          format="avif"
        />
        {{ teacher.name }}
      </NuxtLink>
    </div>
  </div>
</template>
