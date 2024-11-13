"use client";

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaRocket } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '@/app/lib/hooks';
import { Theme, themes } from '../types';
import { setTheme } from '@/app/lib/slices/theme.slice';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    dispatch(setTheme(themes[nextIndex]));
  };

  const getThemeIcon = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        return <FaSun className="text-gray-800" />;
      case 'dark':
        return <FaMoon className="text-[#cccccc]" />;
      case 'synthwave':
        return <FaRocket className="text-[#ff7edb]" />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-[#3c3c3c] synthwave:hover:bg-[#3d2e5a]"
      aria-label="Toggle theme"
    >
      {getThemeIcon(theme)}
    </button>
  );
};

