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
    <AppNavBar />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!--<AppFooter /> -->
  </UApp>
</template>
