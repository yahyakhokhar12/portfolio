import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  const imageClassName = project.imageContain
    ? 'h-56 w-full rounded-2xl bg-ink-950/80 object-contain object-center p-3'
    : 'h-56 w-full rounded-2xl object-cover';

  return (
    <article className="glass-card group overflow-hidden rounded-3xl p-4 transition hover:-translate-y-1">
      <button onClick={onClick} className="block w-full text-left" aria-label={`Open ${project.title} details`}>
        <img src={project.image} alt={project.title} className={`${imageClassName} transition duration-500 group-hover:scale-[1.02]`} loading="lazy" />
      </button>
      <div className="p-2">
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-300">{project.category}</span>
          <div className="flex gap-2">
            <a href={project.github} aria-label="GitHub" className="rounded-full border border-white/10 p-2 text-white/70 hover:text-gold-400"><Github size={16} /></a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo" className="rounded-full border border-white/10 p-2 text-white/70 hover:text-gold-400"><ExternalLink size={16} /></a>
            )}
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
