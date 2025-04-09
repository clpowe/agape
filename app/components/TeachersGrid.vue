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
  <div :title :description :headline class="container">
    <AppTypography tag="p" variant="text">{{ title }}</AppTypography>
    <AppTypography tag="h2" variant="heading-variable">{{
      headline
    }}</AppTypography>
    <AppTypography tag="p" variant="text">{{ description }}</AppTypography>
    <div class="grid-container">
      <NuxtLink
        v-for="(teacher, index) in teachers"
        :key="index"
        class="card"
        :to="`/teachers/${teacher.slug}`"
      >
        <NuxtImg
          :src="teacher.image"
          class="image"
          width="300"
          height="400"
          format="avif"
        />
        {{ teacher.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: relative;
  container-type: inline-size;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@container (min-width: 600px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
}

@container (min-width: 1200px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
}

.card {
  display: grid;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
