export default function Brand() {
  return <a className="brand" href="#top" aria-label="GAP Tech home">
    <svg className="brand-logo" viewBox="0 0 286 82" role="img" aria-label="GAP Tech">
      <defs>
        <linearGradient id="gap-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#123640" />
          <stop offset="1" stopColor="#092631" />
        </linearGradient>
        <linearGradient id="gap-type" x1="0" y1="0" x2=".75" y2="1">
          <stop offset="0" stopColor="#c8ffe1" />
          <stop offset="1" stopColor="#9de4bf" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="112" height="80" rx="35" fill="url(#gap-bg)" />
      <text x="57" y="56" textAnchor="middle" fill="url(#gap-type)" fontFamily="Arial, sans-serif" fontSize="46" fontWeight="800" letterSpacing="-4">GAP</text>
      <text x="128" y="58" fill="#082533" fontFamily="Arial, sans-serif" fontSize="52" fontWeight="400" letterSpacing="-4">Tech</text>
    </svg>
  </a>
}
