<script setup lang="ts">
type Variant =
  | "heading-xxs"
  | "heading-xs"
  | "heading-s"
  | "heading-m"
  | "heading-l"
  | "heading-xl"
  | "heading-xxl"
  | "heading-3xl"
  | "heading-variable-l"
  | "text-s"
  | "text-m"
  | "text-l"
  | "text-variable-l"
  | "faq-text";

const props = defineProps<{
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant: Variant;
  isBold?: boolean;
  isStrong?: boolean;
}>();

const VARIANT_CLASSES: Record<Variant, string> = {
  "heading-xxs": "heading-xxs",
  "heading-xs": "heading-xs",
  "heading-s": "heading-s",
  "heading-m": "heading-m",
  "heading-l": "heading-l",
  "heading-xl": "heading-xl",
  "heading-xxl": "heading-xxl",
  "heading-3xl": "heading-3xl",
  "heading-variable-l": "heading-variable-l",
  "text-s": "text-s",
  "text-m": "text-m",
  "text-l": "text-l",
  "text-variable-l": "text-variable-l",
  "faq-text": "faq-text",
};

const variantClass = computed(() => {
  return VARIANT_CLASSES[props.variant];
});
</script>
<template>
  <component :is="tag" :class="[variantClass, 'text-width', { 'font-bold': isBold, 'text-strong': isStrong }]">
    <slot />
  </component>
</template>

<style scoped>
.text-width {
  width: 100%;
}

.font-regular {
  font-weight: 300;
}

.font-bold {
  font-weight: 600;
}

.text-strong {
  color: var(--text-strong);
}

.text-weak {
  color: var(--text-weak);
}

.heading-xxs {
  font-size: 1.25rem;
  line-height: 100%;
  text-wrap: balance;
}

.heading-xs {
  font-size: 1.5rem;
  line-height: 100%;
  text-wrap: balance;
}

.heading-s {
  font-size: 1.75rem;
  line-height: 100%;
  text-wrap: balance;
}

.heading-m {
  font-size: 2rem;
  line-height: 100%;
  text-wrap: balance;
}

.heading-l {
  font-size: 2.375rem;
  line-height: 150%;
  text-wrap: balance;
}

.heading-xl {
  font-size: 2rem;
  line-height: 100%;
  text-wrap: balance;
}

@media (min-width: 400px) {
  .heading-xl {
    font-size: 2.4rem;
    line-height: 100%;
  }
}

@media (min-width: 600px) {
  .heading-xl {
    font-size: 2.8rem;
    line-height: 100%;
  }
}

.heading-xxl {
  font-size: 3.375rem;
  line-height: 100%;
}

.heading-3xl {
  font-size: 4rem;
  line-height: 1.1rem;
}

.heading-variable-l {
  font-size: clamp(2.2rem, 1px + 5vw, 3.5rem);
  line-height: 1em;
}

.text-s {
  font-size: 1rem;
  line-height: 160%;
  text-wrap: wrap;
}

.text-m {
  font-size: 1.125rem;
  line-height: 160%;
  text-wrap: wrap;
}

.text-l {
  font-size: 1.25rem;
  line-height: 150%;
  text-wrap: wrap;
}

.text-variable-l {
  font-size: clamp(0.875rem, 1px + 2vw, 1.125rem);
  line-height: 150%;
  text-wrap: wrap;
}

.faq-text {
  font-size: 1.25rem;
  line-height: 110%;
  text-wrap: wrap;
}

:deep(.highlight) {
  color: var(--ui-primary);
}
</style>
