import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
	rules: {
		'nuxt/prefer-import-meta': 'error'
	}
})
