// https://nuxt.com/docs/api/configuration/nuxt-config
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
	future: {
		compatibilityVersion: 4,
	},

	experimental: {
		granularCachedData: true,
	},
	modules: [
		'@nuxtjs/seo',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxtjs/robots',
		'@nuxt/test-utils',
		'@nuxt/eslint',
		'@nuxthub/core',
		'@nuxt/test-utils/module',
		'@vueuse/nuxt',
		'nuxt-posthog',
		'nuxt-svgo',
		'vue3-carousel-nuxt',
		'nuxt-posthog',
		'@nuxt/ui-pro',
		'@nuxt/content',
	],
	css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },

	hub: {
    projectUrl({ env }) {
      if (env === 'preview'){
        return 'https://f3119a7e.agape-67x.pages.dev/'
      }
      return 'https://agape.nuxt.dev/'
    }, 
    blob: true,
  },
  content: {
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

