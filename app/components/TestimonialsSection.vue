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
  <UPageSection :title :description :headline>
    <UPageColumns>
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :description="testimonial.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote]',
        }"
      >
        <template #footer>
          <UUser :name="testimonial.name" size="xl" />
        </template>
      </UPageCard>
    </UPageColumns>
  </UPageSection>
</template>
