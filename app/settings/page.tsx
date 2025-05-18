"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/src/lib/hooks';
import { setFontFamily, setFontSize, FontFamily, FontSize, fontFamilies, fontSizes } from '@/src/lib/store';
import { Theme } from '@/src/features';
import { setTheme } from '@/src/lib/slices/theme.slice';
import { themes } from '@/src/lib/constants';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const fontFamily = useAppSelector((state) => state.fontFamily.value);
  const fontSize = useAppSelector((state) => state.fontSize.value);

  const handleThemeChange = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  const handleFontFamilyChange = (newFontFamily: FontFamily) => {
    dispatch(setFontFamily(newFontFamily));
  };

  const handleFontSizeChange = (newFontSize: FontSize) => {
    dispatch(setFontSize(newFontSize));
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
            onChange={(e) => handleFontSizeChange(e.target.value as FontSize)}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {fontSizes.map((size) => (
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
