// Card categories — the LEFT-RAIL navigation and the tint source for every card.
//
// Ordered by "greater category" because cards belong to broader families:
//   Bestiary → Character → Enhancement → Unique.
// Each subtype carries the neon frame colour of the real printed card, so the
// rail doubles as a colour legend and drives the per-card theme (accentVars).
// `label` is the catalog heading; `navLabel` (when set) is the rail wording
// from the client's LEFT MENU brief ("Cartes Monstre" / "Monster cards").

export const GROUPS = [
  {
    id: 'bestiary',
    label: { fr: 'Bestiaire', en: 'Bestiary' },
    blurb: {
      fr: 'Les créatures du monde : monstres, élites et spectres.',
      en: 'The world’s creatures: monsters, elites and soul eaters.',
    },
    subtypes: [
      { id: 'monster', label: { fr: 'Monstre', en: 'Monster' }, navLabel: { fr: 'Cartes Monstre', en: 'Monster cards' }, color: '#cfd3de' },
      { id: 'elite', label: { fr: 'Élite', en: 'Elite' }, navLabel: { fr: 'Cartes Élite', en: 'Elite cards' }, color: '#f2e400' },
      { id: 'soul-eater', label: { fr: 'Spectre', en: 'Soul Eater' }, navLabel: { fr: 'Cartes Spectre', en: 'Soul Eater cards' }, color: '#2f7bff' },
    ],
  },
  {
    id: 'character',
    label: { fr: 'Sociétés', en: 'Civilizations' },
    blurb: {
      fr: 'Ceux qui mènent le combat : héros, rôles et chimères.',
      en: 'Those who lead the fight: heroes, roles and celestials.',
    },
    subtypes: [
      { id: 'hero', label: { fr: 'Héros', en: 'Hero' }, navLabel: { fr: 'Cartes Héros', en: 'Hero cards' }, color: '#ff3b3b' },
      { id: 'role', label: { fr: 'Rôle', en: 'Role' }, navLabel: { fr: 'Cartes de Rôle', en: 'Role cards' }, color: '#ff5fa8' },
      { id: 'celestial', label: { fr: 'Chimère', en: 'Celestial' }, navLabel: { fr: 'Cartes Chimère', en: 'Celestial cards' }, color: '#a05bff' },
    ],
  },
  {
    id: 'enhancement',
    label: { fr: 'Atouts', en: 'Assets' },
    blurb: {
      fr: 'Ce qui renforce et transforme : domaines et clés.',
      en: 'What strengthens and transforms: domains and keys.',
    },
    subtypes: [
      { id: 'domain', label: { fr: 'Domaine', en: 'Domain' }, navLabel: { fr: 'Cartes Domaine', en: 'Domain cards' }, color: '#37e06a' },
      { id: 'key', label: { fr: 'Clé', en: 'Key' }, navLabel: { fr: 'Cartes Clé', en: 'Key cards' }, color: '#ff9b2f' },
    ],
  },
  {
    id: 'unique',
    label: { fr: 'Spéciales', en: 'Specials' },
    blurb: {
      fr: 'Les cartes à part : Extra, Joueur, Arcanogives et Séries Limitées.',
      en: 'The cards apart: Xtra, Player, Arcammo and Masterpiece Series.',
    },
    subtypes: [
      // Xtra: black card with a neon-glowing yellow "X".
      { id: 'xtra', label: { fr: 'Xtra', en: 'Xtra' }, navLabel: { fr: 'Cartes Extra', en: 'Xtra cards' }, color: '#ffe600', special: 'xtra' },
      // Arcammo: same neon "X" icon as Xtra (client), sits right under it; no
      // cards yet so it stays a passive "coming soon" entry.
      { id: 'arcammo', label: { fr: 'Arcanogives', en: 'Arcammo' }, color: '#ffe600', special: 'xtra', comingSoon: true },
      // Player: glittering rainbow colours.
      { id: 'player', label: { fr: 'Joueur', en: 'Player' }, navLabel: { fr: 'Cartes Joueur', en: 'Player cards' }, color: '#ffffff', special: 'rainbow' },
      // Announced in the LEFT MENU brief — no cards, art or colour yet, so it
      // sits in the rail as a passive "coming soon" entry.
      // Masterpiece: sapphire gem icon with a faint glint (client).
      { id: 'masterpiece', label: { fr: 'Séries Limitées', en: 'Masterpiece Series' }, color: '#3b7bff', special: 'sapphire', comingSoon: true },
    ],
  },
]

// Flat subtype lookup: id → { ...subtype, group, groupLabel }.
export const SUBTYPES = Object.fromEntries(
  GROUPS.flatMap((g) =>
    g.subtypes.map((s) => [s.id, { ...s, group: g.id, groupLabel: g.label }]),
  ),
)

export const GROUP_BY_ID = Object.fromEntries(GROUPS.map((g) => [g.id, g]))

// A CSS colour value suitable for a swatch/tint, honouring the rainbow special.
export const RAINBOW_GRADIENT =
  'conic-gradient(from 210deg, #ff5d5d, #ffd24d, #6bff8f, #4ad2ff, #b06bff, #ff6bd6, #ff5d5d)'

export function subtypeSwatch(subtype) {
  if (subtype?.special === 'rainbow') return RAINBOW_GRADIENT
  return subtype?.color ?? 'var(--accent)'
}
