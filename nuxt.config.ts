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

	experimental: {
		granularCachedData: true,
	},
	modules: [
		"@nuxtjs/seo",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxtjs/robots",
		"@nuxt/test-utils",
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxthub/core",
		"@nuxt/test-utils/module",
		"@vueuse/nuxt",
		"nuxt-svgo",
		"motion-v/nuxt",
		"@nuxt/ui-pro",
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
	robots: {
		sitemap: "https://agapechristianbarprep.com/sitemap.xml",
	},
	runtimeConfig: {
		uiProLicense: "",
	},
});
