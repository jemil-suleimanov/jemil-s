'use client';

import { useEffect } from 'react';
import { useAppSelector } from '@/app/lib/hooks';

export default function ThemeHandler() {
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('light', 'dark', 'synthwave');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return null;
}
