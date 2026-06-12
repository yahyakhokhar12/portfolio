export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/923003804122"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 bg-emerald-500/90 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20"
      >
        WhatsApp
      </a>
      <a
        href="/resume.pdf"
        className="rounded-full border border-gold-400/30 bg-gold-400/15 px-4 py-3 text-sm font-medium text-gold-300"
      >
        Resume
      </a>
    </div>
  );
}
