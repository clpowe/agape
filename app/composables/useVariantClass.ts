// composables/useVariantClass.ts
import { computed, unref, type MaybeRef } from 'vue'

export type TextVariant =
  | 'display'
  | 'title'
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'lead'
  | 'body' | 'body-sm' | 'body-xs'
  | 'caption'
  | 'mono'

type Options = {
  align?: 'left' | 'center' | 'right' | 'justify'
  clamp?: 1 | 2 | 3 | 4 | 5 | 6
  balance?: boolean            // adds `text-balance` if you use the plugin or browser support
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  extra?: string | string[]    // consumer-provided extra classes
}

const MAP: Record<TextVariant, string> = {
  display: 'text-6xl md:text-7xl font-light leading-tight tracking-tight',
  title:   'text-4xl md:text-5xl font-semibold leading-tight',
  h1:      'text-3xl md:text-4xl',
  h2:      'text-2xl md:text-3xl',
  h3:      'text-xl md:text-2xl',
  h4:      'text-lg md:text-xl',
  h5:      'text-base md:text-lg',
  h6:      'text-sm md:text-base',
  lead:    'text-lg md:text-xl',
  body:    'text-base',
  'body-sm': 'text-sm',
  'body-xs': 'text-xs',
  caption: 'text-xs uppercase tracking-wide',
  mono:    'font-mono text-sm'
}

/**
 * Returns a computed class string for a given text variant.
 * Pass a ref/computed for reactivity, or a plain string for static usage.
 */
export function useVariantClass(
  variant?: MaybeRef<TextVariant | undefined>,
  opts: Options = {}
) {
  return computed(() => {
    const v = unref(variant) ?? 'body'
    const classes: Array<string | false | undefined> = [MAP[v]]

    if (opts.align) classes.push(`text-${opts.align}`)
    if (opts.clamp) classes.push(`line-clamp-${opts.clamp}`)
    if (opts.balance) classes.push('text-balance')
    if (opts.leading) classes.push(`leading-${opts.leading}`)
    if (opts.tracking && opts.tracking !== 'normal') classes.push(`tracking-${opts.tracking}`)
    if (opts.extra) classes.push(Array.isArray(opts.extra) ? opts.extra.join(' ') : opts.extra)

    return classes.filter(Boolean).join(' ')
  })
}
