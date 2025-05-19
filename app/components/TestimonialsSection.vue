<script setup lang="ts">
import { motion } from "motion-v";
const { data: testimonials } = await useAsyncData(() =>
	queryCollection("testimonials").all(),
);

defineOptions({ name: "TestimonialsSection" });

defineProps<{
	title?: string;
	description?: string;
	headline?: string;
}>();
const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

function onClickPrev() {
	activeIndex.value--;
}
function onClickNext() {
	activeIndex.value++;
}
function onSelect(index: number) {
	activeIndex.value = index;
}

function select(index: number) {
	activeIndex.value = index;

	carousel.value?.emblaApi?.scrollTo(index);
}
</script>

<template>
  <section>
    <ContentHeader>
      <template #title> {{ title }} </template>
      <template #description> {{ description }} </template>
      <template #content>
        <UCarousel
          ref="carousel"
          v-slot="{ item }"
          arrows
          active
          loop
          align="center"
          :items="testimonials"
          :prev="{ onClick: onClickPrev }"
          :next="{ onClick: onClickNext }"
          @select="onSelect"
        >
          <motion.div>
            <AppTypography tag="p" variant="text-m" class="quote">
              {{ item.quote }}
            </AppTypography>
            <AppTypography
              tag="p"
              variant="text-l"
              :is-bold="true"
              :is-strong="true"
              >{{ item.name }}</AppTypography
            >
          </motion.div>
        </UCarousel>
        <div class="">
          <UButton
            v-for="(item, index) in testimonials"
            :key="index"
            class="opacity-25 hover:opacity-100 transition-opacity"
            :class="{ 'opacity-100': activeIndex === index }"
            @click="select(index)"
          >
            {{ item.name }}
          </UButton>
        </div>
      </template>
    </ContentHeader>
  </section>
</template>

<style></style>
