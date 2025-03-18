export default defineAppConfig({
	ui: {
		colors: {
			primary: 'sangria',
			neutral: 'slate'
		}
	},
	uiPro: {
		container: {
			base: 'max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
		},
		prose: {
			badge: {
				base: 'rounded-full'
			},
			h1: {
				slots: {
					base: 'text-4xl text-(--ui-text-highlighted) font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)',
					link: 'inline-flex items-center gap-2'
				}
			},
			p: {
				base: 'my-5 leading-7 text-pretty'
			}
		}
	}
})
