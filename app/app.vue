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
    <div>
      <AppHeader />
      <NuxtLoadingIndicator />
      <main class="">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>
      <AppFooter />
    </div>
</template>
