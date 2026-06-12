import { useState } from 'react';
import Modal from '../components/Modal';
import SectionHeading from '../components/SectionHeading';
import SectionShell from '../components/SectionShell';
import { certifications } from '../data/siteData';

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <SectionShell>
      <div className="section-shell">
        <SectionHeading eyebrow="Certifications" title="Credibility in card format." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <button
              key={cert.title}
              onClick={() => setActive(cert)}
              className="glass-card overflow-hidden rounded-3xl text-left transition hover:-translate-y-1"
            >
              <div className="flex h-72 items-center justify-center bg-white p-3 md:h-80">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain scale-[1.08]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{cert.title}</h3>
                <p className="mt-2 text-sm text-white/65">{cert.organization}</p>
                <p className="mt-1 text-sm text-gold-400">{cert.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold-400">Certificate Preview</p>
                <h3 className="mt-2 text-3xl font-semibold">{active.title}</h3>
                <p className="mt-2 text-white/65">
                  {active.organization} • {active.date}
                </p>
              </div>
              <a
                href={active.file}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold-400 px-5 py-3 font-medium text-ink-950"
              >
                Open PDF
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-4">
              <img
                src={active.image}
                alt={active.title}
                className="mx-auto max-h-[78vh] w-full object-contain scale-[1.03]"
              />
            </div>
          </div>
        )}
      </Modal>
    </SectionShell>
  );
}
