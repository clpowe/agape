// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        siteName: "Agape Christian Bar Prep",
      },
    },
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/seo",
    "@unocss/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/content",
    "@nuxt/eslint",
    "reka-ui/nuxt",
    "@nuxthub/core",
    "@nuxt/test-utils/module",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  hub: {
    // NuxtHub options
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  runtimeConfig: {
    uiProLicense: "",
  },
});
