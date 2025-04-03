<script setup lang="ts">
const { data: testimonials } = await useAsyncData(() =>
  queryCollection("testimonials").all()
);

console.log(testimonials.value);
</script>

<template>
  <UPageSection>
    <UPageColumns>
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.meta?.quote || ''"
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
