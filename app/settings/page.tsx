"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '../lib/hooks';
import { setTheme, setFontFamily, Theme, FontFamily, themes, fontFamilies } from '../lib/store';
import { useFontSize } from '../contexts/FontSizeContext';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const fontFamily = useAppSelector((state) => state.fontFamily.value);
  const { fontSize, setFontSize } = useFontSize();

  const handleThemeChange = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  const handleFontFamilyChange = (newFontFamily: FontFamily) => {
    dispatch(setFontFamily(newFontFamily));
  };

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Theme</h3>
          <select 
            value={theme} 
            onChange={(e) => handleThemeChange(e.target.value as Theme)}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Font Size</h3>
          <select 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value as 'small' | 'medium' | 'large')}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {['small', 'medium', 'large'].map((size) => (
              <option key={size} value={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Font Family</h3>
          <select 
            value={fontFamily} 
            onChange={(e) => handleFontFamilyChange(e.target.value as FontFamily)}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {fontFamilies.map((family) => (
              <option key={family} value={family}>{family}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
