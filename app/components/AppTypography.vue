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

<style scoped>
/* TEXT SIZES */
.text-small {
  font-size: 1rem;
  /* 16px */
  font-family: var(--font-sans);
}

.text-medium {
  font-size: 1.333rem;
  /* ~21.3px */
  font-family: var(--font-sans);
}

.text-large {
  font-size: 1.777rem;
  /* ~28.4px */
  font-family: var(--font-sans);
  text-wrap: balance;
}

.text-xl {
  font-size: 2.369rem;
  /* ~37.9px */
  font-family: var(--font-sans);
}

/* FIXED HEADING SIZES */
.heading-small {
  font-size: 1.333rem;
  line-height: 1.4;
  font-family: var(--font-crimson);
}

.heading {
  font-size: 1.777rem;
  line-height: 1.3;
  font-family: var(--font-crimson);
}

.heading-medium {
  font-size: 2.369rem;
  line-height: 1.2;
  font-family: var(--font-crimson);
}

.heading-large {
  font-size: 3.157rem;
  line-height: 1.1;
  font-family: var(--font-crimson);
}

.heading-xl {
  font-size: 4.209rem;
  line-height: 1;
  font-family: var(--font-crimson);
}

.heading-2xl {
  font-size: 5.61rem;
  line-height: 1;
  font-family: var(--font-crimson);
}

/* FLUID VARIABLE HEADINGS */
.heading-variable-small {
  font-size: clamp(1rem, 0.2rem + 1.2vw, 1.333rem);
  font-family: var(--font-crimson);
}

.heading-variable {
  font-size: clamp(1.333rem, 0.5rem + 2.5vw, 2.369rem);
  line-height: 0.9;
  font-family: var(--font-crimson);
}

.heading-variable-large {
  font-size: clamp(2.75rem, 1px + 4.5vw, 4rem);
  line-height: 95%;
  font-weight: 700;
  font-family: var(--font-crimson);
  text-wrap: balance;
}
</style>
