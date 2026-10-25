// Non-catalogue sections of the left menu (client "LEFT MENU" brief, Aug 2026).
// These sit above the card categories in the rail, styled passively — they are
// editorial pages, not card sets, so they carry no category colour. Every item
// routes to /info/:id; content lands per item as the client delivers it.

export const INFO_SECTIONS = [
  {
    id: 'cofi',
    label: { fr: 'Chains of Innocence', en: 'Chains of Innocence' },
    items: [
      { id: 'news', label: { fr: 'Nouveautés', en: 'News' } },
      { id: 'ai', label: { fr: 'L’IA et nous', en: 'AI and us' } },
      { id: 'story', label: { fr: 'L’histoire de COFI', en: 'The story of COFI' } },
      { id: 'actors', label: { fr: 'Les acteurs de COFI', en: 'The actors of COFI' } },
    ],
  },
  {
    id: 'how-to-play',
    label: { fr: 'Comment jouer', en: 'How to play' },
    items: [
      { id: 'products', label: { fr: 'Nos produits', en: 'Our products' } },
      { id: 'understanding-cards', label: { fr: 'Comprendre les cartes', en: 'Understanding the cards' } },
      { id: 'rules', label: { fr: 'Les règles du jeu', en: 'Game rules' } },
      { id: 'factions', label: { fr: 'Les factions', en: 'Factions' } },
      { id: 'creatures', label: { fr: 'Les créatures', en: 'Creatures' } },
    ],
  },
  {
    id: 'audio',
    label: { fr: 'Chroniques audio', en: 'Audio chronicles' },
    items: [
      { id: 'in-extremis', label: { fr: 'C’est quoi « In Extremis »', en: 'What is “In Extremis”' } },
      { id: 'in-extremis-xaraglione', label: { fr: 'In Extremis – Xaraglione', en: 'In Extremis – Xaraglione' } },
    ],
  },
]

// Legal pages linked from the site-wide footer (client footer mock, 25.10.26).
// Not shown in the rail; each routes to /info/:id like the sections above and
// shows the "coming soon" stub until its text lands in infoPages.js. Contact
// is a footer link too, but it has its own page (/contact).
export const FOOTER_SECTION = {
  id: 'legal',
  label: { fr: 'Malmaison Games', en: 'Malmaison Games' },
  items: [
    { id: 'legal-notice', label: { fr: 'Mentions légales', en: 'Legal Notice' } },
    { id: 'privacy', label: { fr: 'Confidentialité', en: 'Privacy Policy' } },
    { id: 'cookies', label: { fr: 'Cookies', en: 'Cookie Policy' } },
    { id: 'terms-of-sale', label: { fr: 'CGV', en: 'Terms of Sale' } },
  ],
}

// Flat lookup: item id → { ...item, section } (rail sections + footer pages).
export const INFO_BY_ID = Object.fromEntries(
  [...INFO_SECTIONS, FOOTER_SECTION].flatMap((s) =>
    s.items.map((it) => [it.id, { ...it, section: s }]),
  ),
)
