// composables/useVariantClass.ts

type Variant =
	| 'heading-xxs'
	| 'heading-xs'
	| 'heading-s'
	| 'heading-m'
	| 'heading-l'
	| 'heading-xl'
	| 'heading-xxl'
	| 'heading-3xl'
	| 'heading-variable-l'
	| 'text-s'
	| 'text-m'
	| 'text-l'
	| 'text-variable-l'
	| 'faq-text';

const VARIANT_CLASSES: Record<Variant, string> = {
	'heading-xxs': 'heading-xxs',
	'heading-xs': 'heading-xs',
	'heading-s': 'heading-s',
	'heading-m': 'heading-m',
	'heading-l': 'heading-l',
	'heading-xl': 'heading-xl',
	'heading-xxl': 'heading-xxl',
	'heading-3xl': 'heading-3xl',
	'heading-variable-l': 'heading-variable-l',
	'text-s': 'text-s',
	'text-m': 'text-m',
	'text-l': 'text-l',
	'text-variable-l': 'text-variable-l',
	'faq-text': 'faq-text',
};

export function useVariantClass(variant: Variant) {
	return computed(() => VARIANT_CLASSES[variant]);
}
