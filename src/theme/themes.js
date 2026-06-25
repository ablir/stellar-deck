// Per-aspect design tokens. Components read these (mostly by injecting them as
// CSS custom properties) so that a planet's "world" colour and mood flows
// through the background, side panel, and every card it owns.

export const THEMES = {
  tech: {
    label: 'Tech',
    accent: '#39f5e6',
    accentSoft: '#1b8c8c',
    glow: 'rgba(57, 245, 230, 0.55)',
    smoke: 'rgba(140, 240, 255, 0.40)',
    surface: '#06141b',
    surfaceRaised: '#0c2230',
    text: '#dffaff',
    gradient: 'radial-gradient(circle at 30% 20%, #0a3a44 0%, #04141b 55%, #01080c 100%)',
    motif: 'circuitry & holographic grids',
  },
  mystical: {
    label: 'Mystical',
    accent: '#b486ff',
    accentSoft: '#6f4bd8',
    glow: 'rgba(180, 134, 255, 0.55)',
    smoke: 'rgba(196, 170, 255, 0.42)',
    surface: '#0c0820',
    surfaceRaised: '#1a123a',
    text: '#efe6ff',
    gradient: 'radial-gradient(circle at 70% 25%, #2a1c5e 0%, #120a30 55%, #070418 100%)',
    motif: 'arcane runes & aurora light',
  },
  beastial: {
    label: 'Beastial',
    accent: '#ff6a3d',
    accentSoft: '#b8351c',
    glow: 'rgba(255, 106, 61, 0.55)',
    smoke: 'rgba(255, 150, 90, 0.40)',
    surface: '#1a0907',
    surfaceRaised: '#2c1410',
    text: '#ffe9df',
    gradient: 'radial-gradient(circle at 35% 75%, #5e1f12 0%, #2a0d08 55%, #140503 100%)',
    motif: 'embered jungle & primal energy',
  },
}

// Rarity → accent ring used on the card frame, independent of aspect.
export const RARITY_COLORS = {
  Rare: '#6fb7ff',
  Epic: '#c879ff',
  Legendary: '#ffcf5c',
}

// Build the CSS custom-property object for a given aspect.
export function themeVars(aspect) {
  const t = THEMES[aspect] ?? THEMES.tech
  return {
    '--accent': t.accent,
    '--accent-soft': t.accentSoft,
    '--glow': t.glow,
    '--smoke': t.smoke,
    '--surface': t.surface,
    '--surface-raised': t.surfaceRaised,
    '--text': t.text,
    '--scene-gradient': t.gradient,
  }
}
