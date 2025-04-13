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
  | "text-s"
  | "text-m"
  | "text-l";

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
  "text-s": "text-s",
  "text-m": "text-m",
  "text-l": "text-l",
};

const variantClass = computed(() => {
  return VARIANT_CLASSES[props.variant];
});
</script>
<template>
  <component
    :is="tag"
    :class="[
      isBold ? 'font-bold' : 'font-regular',
      isStrong ? 'text-strong' : 'text-weak',
      variantClass,
      'text-width',
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.text-width {
  max-width: 75ch;
  text-wrap: balance;
}
.font-regular {
  font-weight: 400;
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
  font-size: 1rem;
  line-height: 100%;
}
.heading-xs {
  font-size: 1.5rem;
  line-height: 100%;
}
.heading-s {
  font-size: 1.75rem;
  line-height: 100%;
}
.heading-m {
  font-size: 2rem;
  line-height: 100%;
}
.heading-l {
  font-size: 2.375rem;
  line-height: 100%;
}
.heading-xl {
  font-size: 2.8rem;
  line-height: 100%;
}
.heading-xxl {
  font-size: 3.375rem;
  line-height: 100%;
}
.heading-3xl {
  font-size: 4rem;
  line-height: 1.1rem;
}
.text-s {
  font-size: 0.875rem;
  line-height: 1.5rem;
}
.text-m {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-l {
  font-size: 1.125rem;
  line-height: 1.5rem;
}
</style>
