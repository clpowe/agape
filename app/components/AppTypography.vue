<script setup lang="ts">
type Variant =
  | "heading"
  | "heading-large"
  | "heading-medium"
  | "heading-small"
  | "heading-xl"
  | "heading-2xl"
  | "text"
  | "text-large"
  | "text-medium"
  | "text-small"
  | "text-xl"
  | "heading-variable-small"
  | "heading-variable-large"
  | "heading-variable";

const props = defineProps<{
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant: Variant;
}>();

const VARIANT_CLASSES: Record<Variant, string> = {
  "text-small": "text-small",
  text: "text",
  "text-medium": "text-medium",
  "text-large": "text-large",
  "text-xl": "text-xl",
  "heading-small": "heading-small",
  heading: "heading",
  "heading-medium": "heading-medium",
  "heading-large": "heading-large",
  "heading-xl": "heading-xl",
  "heading-2xl": "heading-2xl",
  "heading-variable-small": "heading-variable-small",
  "heading-variable": "heading-variable",
  "heading-variable-large": "heading-variable-large",
};

const variantClass = computed(() => {
  return VARIANT_CLASSES[props.variant];
});
</script>
<template>
  <component :is="tag" :class="variantClass">
    <slot />
  </component>
</template>

<style scoped></style>
