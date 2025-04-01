<template>
  <section v-once class="py-8 sm:py-12 lg:py-16">
    <div class="px-6 md:px-12 py-14" :class="colorClass">
      <AppTypography tag="h2" variant="heading-variable" class="">
        {{ quote }}
      </AppTypography>

      <AppTypography tag="p" variant="text">
        {{ subtitle }}
      </AppTypography>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: "BreakOutBanner" });

const props = defineProps<{
  quote?: string;
  subtitle?: string;
  color?: string;
}>();

const colorClass = useColorClass(props.color);
</script>
