"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-[#3c3c3c]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="text-[#cccccc]" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
};

export default ThemeSwitcher;
