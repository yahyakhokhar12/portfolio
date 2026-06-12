import { useEffect, useState } from 'react';

export default function TypingText({ items, speed = 120 }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [erase, setErase] = useState(false);

  useEffect(() => {
    const current = items[index];
    const timer = setTimeout(() => {
      if (!erase) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setErase(true), 900);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 1) {
          setErase(false);
          setIndex((i) => (i + 1) % items.length);
        }
      }
    }, erase ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, erase, index, items, speed]);
  return <span>{text}<span className="text-gold-400">|</span></span>;
}
