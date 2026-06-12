export default function SectionShell({ children, className = '' }) {
  return <section className={`section-pad ${className}`}>{children}</section>;
}
