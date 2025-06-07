<script setup lang="ts">
const { data: testimonials } = await useAsyncData(() =>
  queryCollection("testimonials").all(),
);

defineOptions({ name: "TestimonialsSection" });

defineProps<{
  title?: string;
  description?: string;
  headline?: string;
}>();
const activeIndex = ref(0);


function select(index: number) {
  activeIndex.value = index;

}
</script>

<template>
  <section>
    <ContentHeader>
      <template #title>
        {{ title }} </template>
      <template #description> {{ description }} </template>
      <template #content>
        <div class="flow">
          <div class="buton-wrapper">
            <button v-for="(item, index) in testimonials" :key="index"
              class="opacity-25 hover:opacity-100 transition-opacity" :class="{ 'opacity-100': activeIndex === index }"
              @click="select(index)">
              {{ item.name }}
            </button>
          </div>
        </div>
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
</style>
