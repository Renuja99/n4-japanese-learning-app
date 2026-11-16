/** Original line-art illustration in the style of the design reference: an open book with kana floating out. */
export function BookIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 300" className={className} fill="none" aria-hidden>
      {/* looping path ending in a star */}
      <path d="M70 250 C 30 200, 40 120, 110 110 S 210 60, 180 30 S 120 20, 150 70 S 250 90, 268 58" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M268 40 l5 13 14 1 -11 9 4 14 -12 -8 -12 8 4 -14 -11 -9 14 -1z" fill="#f28fb4" />
      {/* sparkles */}
      {[[60, 70], [250, 130], [40, 160], [282, 205]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 9} Q${x} ${y} ${x + 9} ${y} Q${x} ${y} ${x} ${y + 9} Q${x} ${y} ${x - 9} ${y} Q${x} ${y} ${x} ${y - 9}z`} fill="#141414" />
      ))}
      <circle cx="96" cy="60" r="7" stroke="#141414" strokeWidth="2" />
      <circle cx="232" cy="98" r="4" fill="#141414" />
      <path d="M220 160 l10 10 m0 -10 l-10 10" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" />
      {/* gear */}
      <circle cx="50" cy="232" r="11" fill="#f28fb4" stroke="#141414" strokeWidth="2" />
      <circle cx="50" cy="232" r="4" fill="#fff" stroke="#141414" strokeWidth="2" />
      {/* pink blob behind book */}
      <path d="M78 200 C 60 150, 120 128, 160 150 C 200 128, 262 150, 244 204 C 236 250, 90 252, 78 200z" fill="#f28fb4" />
      {/* book */}
      <path d="M160 168 L 70 150 L 78 262 L 160 282z" fill="#141414" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M160 168 L 250 150 L 242 262 L 160 282z" fill="#141414" stroke="#141414" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M160 168 V 282" stroke="#f28fb4" strokeWidth="6" />
      <text x="112" y="230" fontSize="40" fill="#fff" fontWeight="700" textAnchor="middle" fontFamily="var(--font-jp)">文</text>
      <text x="206" y="230" fontSize="40" fill="#f28fb4" fontWeight="700" textAnchor="middle" fontFamily="var(--font-jp)">法</text>
      {/* hands */}
      <ellipse cx="72" cy="214" rx="12" ry="16" fill="#fff" stroke="#141414" strokeWidth="2.2" />
      <ellipse cx="248" cy="214" rx="12" ry="16" fill="#fff" stroke="#141414" strokeWidth="2.2" />
      {/* floating kana cards */}
      <g transform="rotate(-12 110 125)">
        <rect x="92" y="105" width="36" height="40" rx="6" fill="#fff" stroke="#141414" strokeWidth="2" />
        <text x="110" y="134" fontSize="22" fill="#141414" textAnchor="middle" fontFamily="var(--font-jp)">あ</text>
      </g>
      <g transform="rotate(10 214 112)">
        <rect x="196" y="92" width="36" height="40" rx="6" fill="#fff" stroke="#141414" strokeWidth="2" />
        <text x="214" y="121" fontSize="22" fill="#141414" textAnchor="middle" fontFamily="var(--font-jp)">に</text>
      </g>
    </svg>
  );
}
