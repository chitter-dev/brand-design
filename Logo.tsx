/** The Spanwire mark: three agents as poles joined by sagging wires, one amber message on a wire. Mirrors app/icon.svg. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M6 23Q16 29 26 23" />
        <path d="M6 23Q8 13 16 7" />
        <path d="M26 23Q24 13 16 7" />
      </g>
      <g fill="currentColor">
        <circle cx="6" cy="23" r="3.6" />
        <circle cx="26" cy="23" r="3.6" />
        <circle cx="16" cy="7" r="3.6" />
      </g>
      <circle cx="16" cy="26" r="2.8" fill="var(--signal)" />
    </svg>
  );
}

/** Mark plus the "Spanwire" wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-[-0.02em] ${className}`}>
      <Mark className="h-[1.3em] w-auto" />
      Spanwire
    </span>
  );
}
