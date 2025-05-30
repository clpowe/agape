<script setup>
import { ConfigProvider } from 'reka-ui'
useHead({
  htmlAttrs: {
    lang: "en",
    class: "light",
  },
  bodyAttrs: {},
});
const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
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
  </ConfigProvider>
</template>
