"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded hover:bg-[#3c3c3c]"
    >
      {theme === 'dark' ? <FaSun className="text-[#cccccc]" /> : <FaMoon className="text-[#cccccc]" />}
    </button>
  );
};

export default ThemeSwitcher;
