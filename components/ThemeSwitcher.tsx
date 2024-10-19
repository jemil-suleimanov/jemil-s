"use client";

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../app/lib/hooks';
import { setTheme } from '../app/lib/store';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-[#3c3c3c]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="text-[#cccccc]" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
};

export default ThemeSwitcher;
