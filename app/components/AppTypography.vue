<script setup lang="ts">

type Variant = Parameters<typeof useVariantClass>[0]

const props = withDefaults(defineProps<{
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
  variant: Variant,
  isBold?: boolean,
  isStrong?: boolean
}>(), {
  isBold: false,
  isStrong: false
})

const variantClass = useVariantClass(props.variant)
</script>

<template>
  <component
:is="tag" :class="[
    variantClass,
    'text-width',
    { 'font-bold': isBold, 'text-strong': isStrong, 'text-weak': !isStrong }
  ]">
    <slot />
  </component>
</template>
