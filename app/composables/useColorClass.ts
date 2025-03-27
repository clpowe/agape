import { computed } from 'vue'

const COLOR_CLASSES = {
	red: 'bg-primary-900 text-white',
	blue: 'bg-blue-200',
	green: 'bg-green-100',
	purple: 'bg-purple-100',
	yellow: 'bg-yellow-100',
	pink: 'bg-pink-100'
} as const

type ColorKey = keyof typeof COLOR_CLASSES

/**
 * Get background color class based on a color key.
 * @param color - Must be one of the predefined color keys
 */
export const useColorClass = (color?: string) => {
	return computed(() => {
		if (color && color in COLOR_CLASSES) {
			return COLOR_CLASSES[color as ColorKey]
		}
		return ''
	})
}
