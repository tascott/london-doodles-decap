export function NavMenuIcon({ open }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}
