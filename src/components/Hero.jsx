import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import TypingText from './TypingText';
import { roles } from '../data/siteData';

export default function Hero() {
  return (
    <section className="noise relative overflow-hidden border-b border-white/10">
      <div className="section-shell grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold-400">Premium Portfolio</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            Muhammad Yahya Khokhar
            <span className="gradient-text block">Building data-rich digital products.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Power BI dashboards, ML/AI workflows, and modern MERN experiences crafted with a luxury dark aesthetic and product-focused execution.
          </p>
          <div className="mt-6 text-lg font-medium text-white">
            <TypingText items={roles} />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-medium text-ink-950 transition hover:scale-[1.02]">
              Hire Me <ArrowRight size={16} />
            </Link>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:border-gold-400/40 hover:text-gold-300">
              Download Resume <Download size={16} />
            </a>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:border-gold-400/40 hover:text-gold-300">
              View Projects
            </Link>
          </div>
        </div>
        <motion.div className="relative flex items-center justify-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="absolute inset-10 rounded-full bg-gold-400/10 blur-3xl" />
          <img src="/YAHYA.jpeg" alt="Muhammad Yahya Khokhar" className="relative z-10 h-[420px] w-full max-w-[420px] rounded-[2rem] object-cover object-top shadow-2xl shadow-black/50 ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
