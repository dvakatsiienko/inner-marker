/* Core */
import { useState } from 'react';

/* Components */
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const handleClick = () => {
    const next = !isDark;

    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <Button
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={handleClick}
      size='icon'
      variant='ghost'>
      {isDark ? <SunSvg /> : <MoonSvg />}
    </Button>
  );
};

/* Helpers */
const SunSvg = () => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4' />
    </svg>
  );
};

const MoonSvg = () => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'>
      <path d='M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z' />
    </svg>
  );
};
