'use client';

import { useEffect } from 'react';
import { useAppSelector } from '@/src/lib/hooks';

export default function FontFamilyHandler() {
  const fontFamily = useAppSelector((state) => state.fontFamily.value);

  useEffect(() => {
    const fontMap = {
      'sans-serif': 'var(--font-sans)',
      'serif': 'var(--font-serif)',
      'monospace': 'var(--font-mono)'
    };

    document.documentElement.style.setProperty('--font-family', fontMap[fontFamily]);
    document.body.style.fontFamily = fontMap[fontFamily];
  }, [fontFamily]);

  return null;
}
