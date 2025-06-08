<script setup lang="ts">
import type { Carousel } from 'vue3-carousel'
const { data: testimonials } = await useAsyncData(() =>
  queryCollection("testimonials").all(),
);

defineOptions({ name: "TestimonialsSection" });

defineProps<{
  title?: string;
  description?: string;
  headline?: string;
}>();

const currentSlide = ref(0)

const gallery = useTemplateRef<typeof Carousel>("gallery")

function slideTo(idx: number) {
  gallery.value?.slideTo(idx, false)
}



</script>

<template>
  <section>
    <ContentHeader>
      <template #title>
        {{ title }} </template>
      <template #description> {{ description }} </template>
      <template #content>
        <Carousel ref="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="true" :slide-effect="`slide`"
          :touch-drag="true" :mouse-drag="true">
          <Slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="quote">

              {{ testimonial.quote }}
            </div>
          </Slide>
        </Carousel>

        <template v-for="(testimonial, idx) in testimonials" :key="testimonial.id">
          <button class="name" :class="['thumbnail', { 'is-active': currentSlide === idx }]" @click="slideTo(idx)">
            {{ testimonial.name }}
          </button>
        </template>

      </template>
    </ContentHeader>
  </section>
</template>

<style scoped>
.quote {
  font-size: clamp(1.2rem, 1px + 5vw, 2rem);
  line-height: 1.2em;
  margin-inline: auto;
  max-width: 55ch;
  text-wrap: pretty;
  text-align: center;
}

.buton-wrapper {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  content: center;
  place-items: center;
  place-content: center;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 8rem), 1fr));
  gap: 1rem;
}

.thumbnails {
  margin: auto;
  margin-top: 1rem;
}

.name {
  background-color: var(--background-terciary);
}

.is-active {
  background-color: var(--color-brand-500);
}
</style>
