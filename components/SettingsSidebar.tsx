"use client";

import React from 'react';
import { useFontSize } from '../app/contexts/FontSizeContext';
import { useFontFamily } from '../app/contexts/FontFamilyContext';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { setTheme, Theme, themes } from '@/app/lib/store';

const fontSizes = ['small', 'medium', 'large'];
const fontFamilies = ['monospace', 'sans-serif', 'serif'];

const SettingsSidebar: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const { fontSize, setFontSize } = useFontSize();
  const { fontFamily, setFontFamily } = useFontFamily();

  return (
    <div className="w-64  dark:bg-[#252526] p-4 overflow-y-auto border-l border-gray-200 dark:border-[#1e1e1e]">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Theme</h3>
          <select 
            value={theme} 
            onChange={(e) => dispatch(setTheme(e.target.value as Theme))}
            className="w-full dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Font Size</h3>
          <select 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value as 'small' | 'medium' | 'large')}
            className="w-full bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {fontSizes.map((size) => (
              <option key={size} value={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Font Family</h3>
          <select 
            value={fontFamily} 
            onChange={(e) => setFontFamily(e.target.value as 'monospace' | 'sans-serif' | 'serif')}
            className="w-full bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
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

export default SettingsSidebar;
