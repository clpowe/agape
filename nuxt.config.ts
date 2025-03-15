import { JSONObject } from './node_modules/superjson/dist/types.d'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	modules: [
		'@nuxt/content',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/test-utils',
		'@nuxt/ui-pro',
		'@nuxt/eslint',
		'@nuxthub/core'
	],
	hub: {
		// NuxtHub options
	},
	content: {
		preview: {
			api: 'https://api.nuxt.studio'
		},
		renderer: {
			anchorLinks: false
		}
	}
})
