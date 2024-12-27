import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  [key: string]: any;
}

export default function TypewriterText({ text, className = '', delay = 100, ...props }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [glitchText, setGlitchText] = useState('');

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);

        // Random glitch effect
        if (Math.random() > 0.8) {
          const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
          setGlitchText(randomChar);
          setTimeout(() => setGlitchText(''), 50);
        }
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <div className={className} {...props}>
      {displayedText}
      {glitchText}
      <span className="animate-pulse">_</span>
    </div>
  );
}