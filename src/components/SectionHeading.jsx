export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-white/65 md:text-lg">{description}</p>}
    </div>
  );
}
