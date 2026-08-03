/**
 * Sigil — the three-fold star/pinwheel mark from the card backs. Rendered as
 * inline SVG so it inherits `currentColor` and can glow with any theme accent.
 * Used small in the brand lockup and large at the centre of the home page.
 */
export default function Sigil({ size = 40, className = '', title }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
      fill="none"
      stroke="currentColor"
    >
      {/* three orbiting arms sweeping around a hub */}
      <g strokeWidth="4" strokeLinecap="round">
        {[0, 120, 240].map((a) => (
          <g key={a} transform={`rotate(${a} 50 50)`}>
            <path d="M50 50 C 50 34, 60 24, 74 26" />
            <circle cx="76" cy="27" r="6" />
            <circle cx="76" cy="27" r="2.2" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
      <circle cx="50" cy="50" r="8.5" strokeWidth="4" />
      <circle cx="50" cy="50" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
