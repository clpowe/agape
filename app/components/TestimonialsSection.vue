<script setup lang="ts">
const { data: testimonials } = await useAsyncData(() =>
  queryCollection("testimonials").all()
);

defineOptions({ name: "TestimonialsSection" });

defineProps<{
  title?: string;
  description?: string;
  headline?: string;
}>();
</script>

<template>
  <section :title :description :headline>
    <AppTypography tag="p" variant="text">{{ title }}</AppTypography>
    <div>
      <div v-for="(testimonial, index) in testimonials" :key="index">
        <AppTypography tag="p" variant="text" class="mt-2">
          {{ testimonial.quote }}
        </AppTypography>
        <AppTypography tag="p" variant="heading">{{
          testimonial.name
        }}</AppTypography>
      </div>
    </div>
  </section>
</template>
