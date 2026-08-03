// Card categories — the LEFT-RAIL navigation and the tint source for every card.
//
// Ordered by "greater category" because cards belong to broader families:
//   Bestiary → Character → Enhancement → Unique.
// Each subtype carries the neon frame colour of the real printed card, so the
// rail doubles as a colour legend and drives the per-card theme (accentVars).

export const GROUPS = [
  {
    id: 'bestiary',
    label: { fr: 'Bestiaire', en: 'Bestiary' },
    blurb: {
      fr: 'Les créatures du monde : monstres, élites et dévoreurs d’âmes.',
      en: 'The world’s creatures: monsters, elites and soul eaters.',
    },
    subtypes: [
      { id: 'monster', label: { fr: 'Monstre', en: 'Monster' }, color: '#cfd3de' },
      { id: 'elite', label: { fr: 'Élite', en: 'Elite' }, color: '#f2e400' },
      { id: 'soul-eater', label: { fr: 'Dévoreur d’âmes', en: 'Soul Eater' }, color: '#2f7bff' },
    ],
  },
  {
    id: 'character',
    label: { fr: 'Personnage', en: 'Character' },
    blurb: {
      fr: 'Ceux qui mènent le combat : héros, rôles et célestes.',
      en: 'Those who lead the fight: heroes, roles and celestials.',
    },
    subtypes: [
      { id: 'hero', label: { fr: 'Héros', en: 'Hero' }, color: '#ff3b3b' },
      { id: 'role', label: { fr: 'Rôle', en: 'Role' }, color: '#ff5fa8' },
      { id: 'celestial', label: { fr: 'Céleste', en: 'Celestial' }, color: '#a05bff' },
    ],
  },
  {
    id: 'enhancement',
    label: { fr: 'Amélioration', en: 'Enhancement' },
    blurb: {
      fr: 'Ce qui renforce et transforme : domaines et clés.',
      en: 'What strengthens and transforms: domains and keys.',
    },
    subtypes: [
      { id: 'domain', label: { fr: 'Domaine', en: 'Domain' }, color: '#37e06a' },
      { id: 'key', label: { fr: 'Clé', en: 'Key' }, color: '#ff9b2f' },
    ],
  },
  {
    id: 'unique',
    label: { fr: 'Unique', en: 'Unique' },
    blurb: {
      fr: 'Les cartes à part : Xtra et cartes joueur.',
      en: 'The cards apart: Xtra and player cards.',
    },
    subtypes: [
      // Xtra: black card with a neon-glowing yellow "X".
      { id: 'xtra', label: { fr: 'Xtra', en: 'Xtra' }, color: '#ffe600', special: 'xtra' },
      // Player: glittering rainbow colours.
      { id: 'player', label: { fr: 'Joueur', en: 'Player' }, color: '#ffffff', special: 'rainbow' },
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
