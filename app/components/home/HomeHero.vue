<script setup lang="ts">
defineProps<{ img?: string; alt?: string }>();
</script>

<template>
  <section class="section" >
    <div class="content-wrapper">
      <AppTypography
        tag="h2"
        variant="heading-variable-l"
        class="font-bold text-balance"
        :is-bold="true"
        :is-strong="true"
      >
        <slot mdc-unwrap="p" name="title" />
      </AppTypography>
      <div class="main-content">
        <AppTypography tag="p" variant="text-variable-l">
          <slot mdc-unwrap="p" name="description" />
        </AppTypography>
        <div class="actions">
          <slot mdc-unwrap="p" name="actions" />
        </div>
      </div>
    </div>

    <div class="image">
      <NuxtImg :src="img" :alt="alt" format="avif" width="1000" height="500" />
    </div>
  </section>
</template>

<style scoped>


.content-wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min(100%,300px), 1fr));
  grid-column: span 2;
  gap: calc(var(--spacing) * 4);
}

.main-content {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  margin-block-strart: var(--space-m);
}

.image {
  grid-column: span 2;
  border-radius: var(--space-m);
  img {
    width: 100%;
  }
}

.actions {
  display: flex;
  flex-flow: row wrap;
  gap: calc(var(--spacing) * 2);

}




</style>
