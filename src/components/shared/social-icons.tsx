export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 3.5C4.15 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.15 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5Z" />
      <path d="M9.5 8.5H12.72V10.06H12.77C13.22 9.22 14.3 8.34 15.92 8.34C19.34 8.34 19.98 10.48 19.98 13.29V20.5H16.6V13.97C16.6 12.7 16.58 11.06 14.82 11.06C13.04 11.06 12.78 12.44 12.78 13.88V20.5H9.5V8.5Z" />
    </svg>
  )
}
