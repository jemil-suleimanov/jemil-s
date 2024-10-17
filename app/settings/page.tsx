"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const themes = ['light', 'dark', 'system'];
const fontSizes = ['12px', '14px', '16px', '18px', '20px'];
const fontFamilies = ['Geist Sans', 'Geist Mono', 'Arial', 'Helvetica', 'Times New Roman'];

const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Geist Sans');

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-[#cccccc]">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Theme</h3>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)}
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
            onChange={(e) => setFontSize(e.target.value)}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {fontSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Font Family</h3>
          <select 
            value={fontFamily} 
            onChange={(e) => setFontFamily(e.target.value)}
            className="bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
          >
            {fontFamilies.map((font) => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
