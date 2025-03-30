<script setup lang="ts">
import { useColorClass } from "~/composables/useColorClass";

defineOptions({ name: "HeroBanner" });

interface HeroProps {
  headline?: string;
  eyebrow?: string;
  image?: string;
  description?: string;
  altText: string;
  links?: [];
  color?: "primary" | "blue" | "green" | "purple" | "yellow" | "pink";
}

const props = withDefaults(defineProps<HeroProps>(), {
  headline: "",
  eyebrow: "",
  image: "",
  description: "",
  links: () => [],
  color: undefined,
});

const colorClass = useColorClass(props.color);
const imageLoaded = ref(false);
const imageError = ref(false);

const handleImageLoad = () => {
  imageLoaded.value = true;
};
const handleImageError = () => {
  imageError.value = true;
};
</script>

<template>
  <div class="max-w-[1440px] mx-auto text-slate-950" :class="colorClass">
    <div
      id="main-content"
      class="grid min-h-[700px] grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 overflow-clip"
    >
      <div
        class="grid gap-6 py-6 px-6 md:py-22 md:px-12 lg:px-16 lg:py-20 self-center lg:self-end"
      >
        <AppTypography tag="h1" variant="text">
          {{ eyebrow }}
        </AppTypography>
        <AppTypography tag="h2" variant="heading-variable-large">
          {{ headline }}
        </AppTypography>
        <AppTypography tag="p" variant="text-large">
          {{ description }}
        </AppTypography>

        <div v-if="links.length > 0" class="flex gap-2 flex-wrap">
          <UButton
            class="rounded-full"
            color="neutral"
            size="2xl"
            :to="links[0].to"
          >
            {{ links[0].text }}
          </UButton>
          <UButton
            class="rounded-full"
            color="primary"
            size="2xl"
            :to="links[0].to"
          >
            {{ links[1].text }}
          </UButton>
        </div>
      </div>

      <div class="relative">
        <div
          v-if="imageError"
          class="absolute inset-0 flex items-center justify-center bg-gray-100"
        >
          <p class="text-red-500">Error loading image</p>
        </div>
        <NuxtImg
          v-else
          :src="props.image"
          :alt="props.altText"
          fit="cover"
          class="grid grid-cols-3 grid-rows-3 w-full h-full object-cover"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        <div
          v-if="!imageLoaded && !imageError"
          class="absolute inset-0 flex items-center justify-center bg-gray-100"
        >
          <USkeleton class="h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Accessibility - Skip Link Styling */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #4a90e2;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
