'use client';

import { useEffect } from 'react';
import { useAppSelector } from '@/app/lib/hooks';

export default function FontSizeHandler() {
  const fontSize = useAppSelector((state) => state.fontSize.value);

  useEffect(() => {
    document.documentElement.style.fontSize = 
      fontSize === 'small' ? '14px' : fontSize === 'medium' ? '16px' : '18px';
  }, [fontSize]);

  return null;
}
