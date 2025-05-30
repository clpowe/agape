<template>
  <div class="page-wrapper flow">
    <slot />
  </div>
</template>

<style scoped>
.page-wrapper {
  padding: var(--space-xs);
  overflow: clip;

  @media (width > 440px) {
    padding: var(--space-sm);
  }
}
</style>