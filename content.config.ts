import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*.md'
		}),
		navigation: defineCollection({
			type: 'data',
			source: 'navigation/**.json',
			schema: z.object({
				label: z.string(),
				to: z.string(),
				icon: z.string().optional(),
				children: z
					.array(
						z.object({
							label: z.string(),
							description: z.string().max(60).optional(),
							to: z.string(),
							icon: z.string().optional()
						})
					)
					.optional()
			})
		}),
		teachers: defineCollection({
			type: 'data',
			source: 'teachers/*.md',
			schema: z.object({
				name: z.string(),
				image: z.string(),
				expertise: z.array(z.string()),
				education: z.array(z.string()),
				baradmissions: z.array(z.string()),
				contact: z.string()
			})
		})
	}
})
