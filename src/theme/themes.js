// Design tokens for Chains of Innocence.
//
// The catalog is browsed *by card category*, and every card is tinted with its
// own frame colour (defined in data/categories.js). Rather than a fixed set of
// "aspect" palettes, components derive their neon accent from a single colour
// via accentVars(); surface/text defaults come from :root in global.css.

// Rarity — the client's official six-level ladder (Rev 1, Part 3 step 1),
// with the specified colours kept luminous enough to read on black:
//   Commune/Common → white, Peu commune/Uncommon → green, Rare → light blue,
//   Ultra rare → yellow, Épique/Epic → violet, Légendaire/Legendary → orange.
export const RARITIES = {
  common: { label: { fr: 'Commune', en: 'Common' }, color: '#f2f5fa' },
  uncommon: { label: { fr: 'Peu commune', en: 'Uncommon' }, color: '#57e39b' },
  rare: { label: { fr: 'Rare', en: 'Rare' }, color: '#6fd3ff' },
  'ultra-rare': { label: { fr: 'Ultra rare', en: 'Ultra Rare' }, color: '#ffd75e' },
  epic: { label: { fr: 'Épique', en: 'Epic' }, color: '#c46bff' },
  legendary: { label: { fr: 'Légendaire', en: 'Legendary' }, color: '#ff9a3d' },
}

export const RARITY_ORDER = ['common', 'uncommon', 'rare', 'ultra-rare', 'epic', 'legendary']

export function rarityColor(rarity) {
  return RARITIES[rarity]?.color ?? 'var(--accent)'
}

export function rarityLabel(rarity) {
  return RARITIES[rarity]?.label ?? null
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
