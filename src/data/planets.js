// Planets — the LORE axis (home configuration + lore pages), separate from the
// category browse axis. Five worlds orbit the central Black Hole, echoing the
// star-sigil on the card backs. Three are revealed; two are future expansions,
// shown darkened with their names hidden until release.
//
// Names and lore are placeholders — the client will provide the real French and
// English copy (and each planet's grand playmat background) in a later round.

export const PLANETS = [
  {
    id: 'planet-i',
    name: { fr: 'Planète I', en: 'Planet I' }, // placeholder name
    color: '#ff6a3d',
    gradient: 'radial-gradient(circle at 35% 30%, #ff9e6b 0%, #b8351c 45%, #3a0f07 100%)',
    tba: false,
    lore: {
      fr: 'Le récit de ce monde sera bientôt dévoilé. (texte provisoire)',
      en: 'The lore of this world will be revealed soon. (placeholder text)',
    },
  },
  {
    id: 'planet-ii',
    name: { fr: 'Planète II', en: 'Planet II' }, // placeholder name
    color: '#39f5e6',
    gradient: 'radial-gradient(circle at 35% 30%, #8fe9ff 0%, #1b8c8c 45%, #04141b 100%)',
    tba: false,
    lore: {
      fr: 'Le récit de ce monde sera bientôt dévoilé. (texte provisoire)',
      en: 'The lore of this world will be revealed soon. (placeholder text)',
    },
  },
  {
    id: 'planet-iii',
    name: { fr: 'Planète III', en: 'Planet III' }, // placeholder name
    color: '#b486ff',
    gradient: 'radial-gradient(circle at 35% 30%, #c9b3ff 0%, #6f4bd8 45%, #120a30 100%)',
    tba: false,
    lore: {
      fr: 'Le récit de ce monde sera bientôt dévoilé. (texte provisoire)',
      en: 'The lore of this world will be revealed soon. (placeholder text)',
    },
  },
  {
    id: 'planet-iv',
    name: { fr: 'Planète IV', en: 'Planet IV' },
    color: '#4a5a6a',
    gradient: 'radial-gradient(circle at 35% 30%, #2a3644 0%, #141c26 45%, #05080c 100%)',
    tba: true,
    lore: { fr: '', en: '' },
  },
  {
    id: 'planet-v',
    name: { fr: 'Planète V', en: 'Planet V' },
    color: '#4a5a6a',
    gradient: 'radial-gradient(circle at 35% 30%, #2a3644 0%, #141c26 45%, #05080c 100%)',
    tba: true,
    lore: { fr: '', en: '' },
  },
]

export const PLANET_BY_ID = Object.fromEntries(PLANETS.map((p) => [p.id, p]))
