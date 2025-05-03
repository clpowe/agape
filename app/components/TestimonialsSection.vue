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
  <section>
    <ContentHeader>
      <template #title> {{ title }} </template>
      <template #description> {{ description }} </template>
    </ContentHeader>
    <div>
      <div
        class="testimonial"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <AppTypography tag="p" variant="text-m" class="mt-2">
          {{ testimonial.quote }}
        </AppTypography>
        <AppTypography tag="p" variant="text-m">{{
          testimonial.name
        }}</AppTypography>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial {
}
</style>
