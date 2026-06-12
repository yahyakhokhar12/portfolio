export default function Loader({ fullScreen = false }) {
  const wrapper = fullScreen ? 'fixed inset-0 z-[100] bg-ink-950' : 'w-full py-16';
  return (
    <div className={`${wrapper} grid place-items-center`}>
      <div className="h-14 w-14 animate-spin rounded-full border-2 border-white/10 border-t-gold-400" />
    </div>
  );
}
