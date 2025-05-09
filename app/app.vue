<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
    class: "light",
  },
  bodyAttrs: {},
});
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtLoadingIndicator />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <AppFooter />
  </UApp>
</template>
