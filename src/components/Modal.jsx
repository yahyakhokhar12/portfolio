import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-900 p-6" initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} aria-label="Close modal" className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white/70 hover:text-gold-400"><X size={18} /></button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
