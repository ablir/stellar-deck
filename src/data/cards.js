// The card catalog.
//
// Every set is generated from SETS below (client sizes, 2026-08-29): each slot
// is an unreleased card showing its colour-matched BACK, its reference (letter
// + 4 digits, e.g. M0001) and "???" for the name. Real cards live in RELEASED
// and are merged over their slot by reference.
//
// Only the three bestiary test cards are RELEASED right now. Everything else is
// a clearly-marked placeholder awaiting real art + the client's French/English
// copy, stats and confirmed rarity. Swap the `PLACEHOLDER` values as they land.

import monsterFront from '../assets/Test Black Card.png'
import eliteFront from '../assets/Test Yellow Card.png'
import soulEaterFront from '../assets/Test Blue Card.png'
// Card backs — the client's "legal" versions (2026-08-29 delivery), one per
// subtype, matching the printed frame colours in data/categories.js.
import blackBack from '../assets/backs/black-back.png'
import yellowBack from '../assets/backs/yellow-back.png'
import blueBack from '../assets/backs/blue-back.png'
import redBack from '../assets/backs/red-back.png'
import pinkBack from '../assets/backs/pink-back.png'
import violetBack from '../assets/backs/violet-back.png'
import greenBack from '../assets/backs/green-back.png'
import orangeBack from '../assets/backs/orange-back.png'
import xtraBack from '../assets/backs/xtra-back.png'
import playerBack from '../assets/backs/player-back.png'

// Card back to show for an unreleased card of a given subtype.
const BACKS = {
  monster: blackBack,
  elite: yellowBack,
  'soul-eater': blueBack,
  hero: redBack,
  role: pinkBack,
  celestial: violetBack,
  domain: greenBack,
  key: orangeBack,
  xtra: xtraBack,
  player: playerBack,
  default: blackBack,
}

export function backFor(subtype) {
  return BACKS[subtype] ?? BACKS.default
}

// Showcase switch: while false, every card is shown BACK-ONLY (no face-up art,
// name, rarity or info window) regardless of its own `released` flag. Flip to
// true to reveal the released cards again — nothing else needs to change.
export const SHOW_FRONTS = false

// Set sizes and reference letters — client figures (2026-08-29). References
// follow the client format: <letter><4 digits>, e.g. M0001.
export const SETS = [
  { subtype: 'monster', group: 'bestiary', prefix: 'M', count: 340 },
  { subtype: 'elite', group: 'bestiary', prefix: 'E', count: 137 },
  { subtype: 'soul-eater', group: 'bestiary', prefix: 'S', count: 53 },
  { subtype: 'hero', group: 'character', prefix: 'H', count: 437 },
  { subtype: 'role', group: 'character', prefix: 'R', count: 222 },
  { subtype: 'celestial', group: 'character', prefix: 'C', count: 109 },
  { subtype: 'domain', group: 'enhancement', prefix: 'D', count: 155 },
  { subtype: 'key', group: 'enhancement', prefix: 'K', count: 65 },
  { subtype: 'xtra', group: 'unique', prefix: 'X', count: 378 },
  { subtype: 'player', group: 'unique', prefix: 'P', count: 51 },
]

// Released cards: full data, keyed into their slot by `ref`. Only the three
// bestiary test cards exist so far; the copy is placeholder pending the
// client's French/English text, stats and confirmed rarity.
const RELEASED = [
  // ── Monster ────────────────────────────────────────────────────────────────
  {
    id: 'monster-0001',
    ref: 'M0001',
    released: true,
    front: monsterFront,
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

  // ── Elite ──────────────────────────────────────────────────────────────────
  {
    id: 'elite-0001',
    ref: 'E0001',
    released: true,
    front: eliteFront,
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

  // ── Soul Eater ─────────────────────────────────────────────────────────────
  {
    id: 'soul-eater-0001',
    ref: 'S0001',
    released: true,
    front: soulEaterFront,
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
]
const RELEASED_BY_REF = Object.fromEntries(RELEASED.map((c) => [c.ref, c]))

const CARD_DATA = SETS.flatMap(({ subtype, group, prefix, count }) =>
  Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(4, '0')
    const ref = `${prefix}${n}`
    const slot = { id: `${subtype}-${n}`, ref, group, subtype, released: false, back: backFor(subtype) }
    return RELEASED_BY_REF[ref] ? { ...slot, ...RELEASED_BY_REF[ref] } : slot
  }),
)

export const CARDS = SHOW_FRONTS ? CARD_DATA : CARD_DATA.map((c) => ({ ...c, released: false }))

// Cards for a given group id (or all cards when no group given).
export function cardsForGroup(groupId) {
  if (!groupId) return CARDS
  return CARDS.filter((c) => c.group === groupId)
}

// Cards for a specific subtype id.
export function cardsForSubtype(subtypeId) {
  return CARDS.filter((c) => c.subtype === subtypeId)
}
