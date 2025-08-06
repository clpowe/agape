export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        siteName: 'Agape Christian Bar Prep',
      },
    },
  },

  devtools: { enabled: true }, 

  modules: [
    '@nuxtjs/seo',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/robots',
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    'nuxt-posthog',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxthub/core',
    'nuxt-security',
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false,
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'script-src': ["'self'", "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'", "'wasm-unsafe-eval'"],
        'script-src-attr': ["'self'", "'unsafe-inline'"],
        // You can also add 'wasm-unsafe-eval' to other relevant directives if needed
      }
    }
  },

  routeRules: {
    '/api/apply': {
      csurf: true,
    },
  },

  hub: {
    projectUrl({ env }) {
      if (env === 'preview') {
        return 'https://f3119a7e.agape-67x.pages.dev/';
      }
      return 'https://agape.nuxt.dev/';
    },
    blob: true,
  },

  content: {
    experimental: {
      clientDb: false
    },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },

  robots: {
    sitemap: 'https://agapechristianbarprep.com/sitemap.xml',
  },

  runtimeConfig: {
    uiProLicense: '',
    airtableApiKey: '',
    public: {
      posthogPublicKey: 'phc_U861r9C5hjKh8CRlC1uGW6NW6OG3yfhZstFtFEOjCxX',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2025-05-24',
    },
  },
});
