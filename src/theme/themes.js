// Design tokens for Chains of Innocence.
//
// The catalog is browsed *by card category*, and every card is tinted with its
// own frame colour (defined in data/categories.js). Rather than a fixed set of
// "aspect" palettes, components derive their neon accent from a single colour
// via accentVars(); surface/text defaults come from :root in global.css.

// Rarity → neon accent. Placeholder ladder; the client will confirm the exact
// levels and we only need to adjust these hex values + the ORDER array.
export const RARITY_COLORS = {
  Common: '#9fb2c9',
  Uncommon: '#57e39b',
  Rare: '#4aa8ff',
  Epic: '#c46bff',
  Legendary: '#ffcf4d',
  Mythic: '#ff5d7a',
}

export const RARITY_ORDER = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic']

export function rarityColor(rarity) {
  return RARITY_COLORS[rarity] ?? 'var(--accent)'
}

// Build CSS custom properties that tint a subtree with a single accent colour.
// color-mix keeps the soft/glow derivations in CSS so we avoid JS colour maths.
export function accentVars(color) {
  const c = color ?? '#39f5e6'
  return {
    '--accent': c,
    '--accent-soft': `color-mix(in srgb, ${c} 55%, #05060a)`,
    '--glow': `color-mix(in srgb, ${c} 60%, transparent)`,
    '--accent-dim': `color-mix(in srgb, ${c} 32%, transparent)`,
  }
}
