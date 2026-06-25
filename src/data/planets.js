// Central data source for the showcase.
// Each planet belongs to one of three "aspects" that drive its visual theme:
//   - tech      : neon circuitry, holographic grids, cold light
//   - mystical  : arcane runes, aurora glow, floating motes
//   - beastial  : organic, embered, primal energy
//
// Cards reference their planet's aspect so a single <Card /> can render any
// of them while staying visually consistent with the world it comes from.

export const ASPECTS = {
  tech: 'tech',
  mystical: 'mystical',
  beastial: 'beastial',
}

export const PLANETS = [
  {
    id: 'neon-forge',
    name: 'Neon Forge',
    aspect: ASPECTS.tech,
    tagline: 'A foundry-world wrapped in living circuitry.',
    description:
      'Endless server-spires hum across the surface of Neon Forge, where machine intelligences trade power like currency.',
    cards: [
      {
        id: 'tech-001',
        name: 'Arc Sentinel',
        type: 'Construct',
        rarity: 'Epic',
        power: 7,
        defense: 6,
        cost: 5,
        ability: 'Overclock: deal 2 damage to all enemy constructs when deployed.',
        flavor: '"It was built to guard a door that no longer exists."',
        glyph: '⛓',
      },
      {
        id: 'tech-002',
        name: 'Pulse Drifter',
        type: 'Unit',
        rarity: 'Rare',
        power: 4,
        defense: 3,
        cost: 3,
        ability: 'Haste. Gains +1 power for each energy node you control.',
        flavor: '"Speed is just patience that ran out."',
        glyph: '⚡',
      },
      {
        id: 'tech-003',
        name: 'Datavault Core',
        type: 'Structure',
        rarity: 'Legendary',
        power: 0,
        defense: 12,
        cost: 6,
        ability: 'Draw an extra card each turn while this survives.',
        flavor: '"Every secret the Forge ever forgot is still in here."',
        glyph: '◈',
      },
    ],
  },
  {
    id: 'veil-of-aurynn',
    name: 'Veil of Aurynn',
    aspect: ASPECTS.mystical,
    tagline: 'Where starlight is bottled and sold as memory.',
    description:
      'Aurynn drifts behind a permanent aurora. Its towers are grown, not built, and its mages speak to the dark between stars.',
    cards: [
      {
        id: 'myst-001',
        name: 'Runebound Seer',
        type: 'Caster',
        rarity: 'Epic',
        power: 5,
        defense: 5,
        cost: 4,
        ability: 'Foresight: look at the top 3 cards of your deck, reorder them.',
        flavor: '"She remembers tomorrow more clearly than yesterday."',
        glyph: '✶',
      },
      {
        id: 'myst-002',
        name: 'Aurora Wisp',
        type: 'Spirit',
        rarity: 'Rare',
        power: 3,
        defense: 2,
        cost: 2,
        ability: 'When destroyed, heal your avatar for 3.',
        flavor: '"A wish that learned to fly."',
        glyph: '❂',
      },
      {
        id: 'myst-003',
        name: 'The Hollow Star',
        type: 'Relic',
        rarity: 'Legendary',
        power: 9,
        defense: 4,
        cost: 7,
        ability: 'Once per game: silence and banish a target.',
        flavor: '"It fell so far it forgot it was ever light."',
        glyph: '✷',
      },
    ],
  },
  {
    id: 'gorehide-expanse',
    name: 'Gorehide Expanse',
    aspect: ASPECTS.beastial,
    tagline: 'A predator-world that hunts its own visitors.',
    description:
      'Crimson jungles breathe over Gorehide. Here the apex creatures are continents, and survival is the only law worth carving.',
    cards: [
      {
        id: 'beast-001',
        name: 'Maw of the Deep',
        type: 'Beast',
        rarity: 'Legendary',
        power: 11,
        defense: 8,
        cost: 8,
        ability: 'Devour: destroy a unit it kills permanently, gain its power.',
        flavor: '"It does not roar. The silence is the warning."',
        glyph: '☠',
      },
      {
        id: 'beast-002',
        name: 'Emberfang Pack',
        type: 'Swarm',
        rarity: 'Rare',
        power: 2,
        defense: 2,
        cost: 3,
        ability: 'Summon three 2/2 Emberfangs. They attack as one.',
        flavor: '"One is a nuisance. The pack is a verdict."',
        glyph: '✷',
      },
      {
        id: 'beast-003',
        name: 'Thornmother',
        type: 'Beast',
        rarity: 'Epic',
        power: 6,
        defense: 9,
        cost: 5,
        ability: 'Thorns: attackers take 3 damage. Regenerates 2 each turn.',
        flavor: '"The jungle did not grow around her. She is the growing."',
        glyph: '❦',
      },
    ],
  },
]

// Flat list of every card, tagged with its planet + aspect, for the gallery.
export const ALL_CARDS = PLANETS.flatMap((planet) =>
  planet.cards.map((card) => ({
    ...card,
    planetId: planet.id,
    planetName: planet.name,
    aspect: planet.aspect,
  })),
)
