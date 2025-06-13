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
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxthub/core',
		'vue3-carousel-nuxt',
		'@nuxt/test-utils/module',
		'@vueuse/nuxt',
		'nuxt-posthog',
		'nuxt-svgo',
		'@unocss/nuxt',
		'vue3-carousel-nuxt',
		'nuxt-posthog',
	],
	css: ['~/assets/css/main.css'],
	hub: {
		// NuxtHub options
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
		public: {
			posthogPublicKey:
				process.env.NUXT_PUBLIC_POSTHOG_KEY ||
				'phc_U861r9C5hjKh8CRlC1uGW6NW6OG3yfhZstFtFEOjCxX',
			posthogHost:
				process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
			posthogDefaults: '2025-05-24',
		},
	},
});
