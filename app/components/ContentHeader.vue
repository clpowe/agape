<template>
  <div>
    <AppTypography
      tag="h2"
      variant="heading-s"
      :is-bold="true"
      :is-strong="true"
      class="mb-2"
    >
      <slot mdc-unwrap="p" name="title" />
    </AppTypography>
    <AppTypography tag="p" variant="text-m">
      <slot mdc-unwrap="p" name="description" />
    </AppTypography>
  </div>

  <slot name="content" />
</template>
