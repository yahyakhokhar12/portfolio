import useScrollProgress from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <div className="h-full bg-gradient-to-r from-gold-400 to-gold-300" style={{ width: `${progress}%` }} />
    </div>
  );
}
