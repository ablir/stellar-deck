// The card catalog.
//
// Released cards show their real face-up art; unreleased cards show the matching
// card BACK (by colour) plus their reference number and "???" for the name.
//
// Only the three bestiary test cards are RELEASED right now. Everything else is
// a clearly-marked placeholder awaiting real art + the client's French/English
// copy, stats and confirmed rarity. Swap the `PLACEHOLDER` values as they land.

import monsterFront from '../assets/Test Black Card.png'
import eliteFront from '../assets/Test Yellow Card.png'
import soulEaterFront from '../assets/Test Blue Card.png'
import blackBack from '../assets/(FINAL PNG) Black Back Card.png'
import yellowBack from '../assets/(FINAL PNG) Yellow Back Card.png'
import blueBack from '../assets/(FINAL PNG) Blue Back Card.png'

// Card back to show for an unreleased card of a given subtype. Only the three
// bestiary backs exist so far; other categories fall back to the black back.
const BACKS = {
  monster: blackBack,
  elite: yellowBack,
  'soul-eater': blueBack,
  default: blackBack,
}

export function backFor(subtype) {
  return BACKS[subtype] ?? BACKS.default
}

export const CARDS = [
  // ── Bestiary · Monster (RELEASED) ──────────────────────────────────────────
  {
    id: 'bes-monster-001',
    ref: 'BES-M-001',
    group: 'bestiary',
    subtype: 'monster',
    released: true,
    front: monsterFront,
    back: blackBack,
    rarity: 'legendary',
    name: { fr: 'Serpent de Braise', en: 'Emberserpent' }, // placeholder name
    stats: { power: 9, defense: 6, cost: 7 },
    ability: {
      fr: 'Crache-flamme : inflige 3 dégâts à une créature adverse à l’invocation. (texte provisoire)',
      en: 'Flamespit: deals 3 damage to an enemy creature when summoned. (placeholder text)',
    },
    lore: {
      fr: 'Enroulé dans la caldeira, il n’attend qu’une étincelle pour se réveiller. (récit provisoire)',
      en: 'Coiled in the caldera, it waits only for a spark to wake. (placeholder lore)',
    },
  },
  {
    id: 'bes-monster-002',
    ref: 'BES-M-002',
    group: 'bestiary',
    subtype: 'monster',
    released: false,
    back: blackBack,
    rarity: 'rare',
  },

  // ── Bestiary · Elite (RELEASED) ────────────────────────────────────────────
  {
    id: 'bes-elite-001',
    ref: 'BES-E-001',
    group: 'bestiary',
    subtype: 'elite',
    released: true,
    front: eliteFront,
    back: yellowBack,
    rarity: 'epic',
    name: { fr: 'Archimage Foudroyant', en: 'Stormcaller Archmage' }, // placeholder name
    stats: { power: 6, defense: 5, cost: 5 },
    ability: {
      fr: 'Canalise la foudre : pioche une carte à chaque sort lancé. (texte provisoire)',
      en: 'Channel lightning: draw a card each time you cast a spell. (placeholder text)',
    },
    lore: {
      fr: 'Sa magie bleue déchire le voile entre les mondes. (récit provisoire)',
      en: 'His blue magic tears the veil between worlds. (placeholder lore)',
    },
  },
  {
    id: 'bes-elite-002',
    ref: 'BES-E-002',
    group: 'bestiary',
    subtype: 'elite',
    released: false,
    back: yellowBack,
    rarity: 'uncommon',
  },

  // ── Bestiary · Soul Eater (RELEASED) ───────────────────────────────────────
  {
    id: 'bes-soul-001',
    ref: 'BES-S-001',
    group: 'bestiary',
    subtype: 'soul-eater',
    released: true,
    front: soulEaterFront,
    back: blueBack,
    rarity: 'rare',
    name: { fr: 'Œil Dévoreur', en: 'Devouring Eye' }, // placeholder name
    stats: { power: 5, defense: 4, cost: 4 },
    ability: {
      fr: 'Regard vorace : absorbe l’âme d’une créature détruite pour gagner +1/+1. (texte provisoire)',
      en: 'Voracious gaze: absorb a destroyed creature’s soul to gain +1/+1. (placeholder text)',
    },
    lore: {
      fr: 'Il ne cligne jamais. Il n’oublie jamais. Il a toujours faim. (récit provisoire)',
      en: 'It never blinks. It never forgets. It is always hungry. (placeholder lore)',
    },
  },
  {
    id: 'bes-soul-002',
    ref: 'BES-S-002',
    group: 'bestiary',
    subtype: 'soul-eater',
    released: false,
    back: blueBack,
    rarity: 'epic',
  },

  // ── Character (all unreleased — art & copy pending) ─────────────────────────
  { id: 'chr-hero-001', ref: 'CHR-H-001', group: 'character', subtype: 'hero', released: false, back: blackBack, rarity: 'legendary' },
  { id: 'chr-role-001', ref: 'CHR-R-001', group: 'character', subtype: 'role', released: false, back: blackBack, rarity: 'rare' },
  { id: 'chr-cele-001', ref: 'CHR-C-001', group: 'character', subtype: 'celestial', released: false, back: blackBack, rarity: 'ultra-rare' },

  // ── Enhancement (all unreleased) ────────────────────────────────────────────
  { id: 'enh-dom-001', ref: 'ENH-D-001', group: 'enhancement', subtype: 'domain', released: false, back: blackBack, rarity: 'uncommon' },
  { id: 'enh-key-001', ref: 'ENH-K-001', group: 'enhancement', subtype: 'key', released: false, back: blackBack, rarity: 'rare' },

  // ── Unique (all unreleased) ─────────────────────────────────────────────────
  { id: 'unq-xtra-001', ref: 'UNQ-X-001', group: 'unique', subtype: 'xtra', released: false, back: blackBack, rarity: 'epic' },
  { id: 'unq-player-001', ref: 'UNQ-P-001', group: 'unique', subtype: 'player', released: false, back: blackBack, rarity: 'ultra-rare' },
]

// Cards for a given group id (or all cards when no group given).
export function cardsForGroup(groupId) {
  if (!groupId) return CARDS
  return CARDS.filter((c) => c.group === groupId)
}

// Cards for a specific subtype id.
export function cardsForSubtype(subtypeId) {
  return CARDS.filter((c) => c.subtype === subtypeId)
}
