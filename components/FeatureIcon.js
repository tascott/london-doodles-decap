/**
 * Custom line icons — avoids Material Icons “template” feel.
 * stroke uses currentColor (set in SCSS).
 */
const icons = {
  home: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5 12 4l7.5 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5.5a1 1 0 0 1-1-1v-9.5Z"
    />
  ),
  biotech: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 3h4l1 2.5V12c0 2.2-1.6 4-3.5 4S8 14.2 8 12V5.5L9 3Zm1 16v3M7 22h10"
    />
  ),
  family_restroom: (
    <>
      <circle cx="9" cy="7" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M9 14v6M6.5 17h5M15 6v2M15 10v10M12.5 14h5"
      />
      <circle cx="15" cy="4.5" r="1.25" fill="currentColor" />
    </>
  ),
  medical_services: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 8v8M8 12h8" />
    </>
  ),
  inventory_2: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8.5h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-11ZM8.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5M5 12h14"
    />
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 8v4.5l3 2" />
    </>
  ),
};

export default function FeatureIcon({ name, className }) {
  const content = icons[name] ?? icons.home;
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {content}
    </svg>
  );
}
