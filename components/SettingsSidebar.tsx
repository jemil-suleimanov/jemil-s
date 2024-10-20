"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/lib/hooks';
import { setFontFamily, FontFamily, fontFamilies, setTheme, Theme, themes, setFontSize } from '../app/lib/store';

const SettingsSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFontFamily = useAppSelector((state) => state.fontFamily.value);
  const currentTheme = useAppSelector((state) => state.theme.value);
  const fontSize = useAppSelector((state) => state.fontSize.value);
  const handleFontFamilyChange = (newFontFamily: FontFamily) => {
    dispatch(setFontFamily(newFontFamily));
  };

  const handleThemeChange = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  const handleFontSizeChange = (newSize: 'small' | 'medium' | 'large') => {
    setFontSize(newSize);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Theme</h3>
        <div className="flex flex-col space-y-2">
          {themes.map((theme) => (
            <button
              key={theme}
              className={`px-3 py-1 rounded ${
                currentTheme === theme
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => handleThemeChange(theme)}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Font Family</h3>
        <div className="flex flex-col space-y-2">
          {fontFamilies.map((family) => (
            <button
              key={family}
              className={`px-3 py-1 rounded ${
                currentFontFamily === family
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => handleFontFamilyChange(family)}
            >
              {family}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Font Size</h3>
        <div className="flex flex-col space-y-2">
          {['small', 'medium', 'large'].map((size) => (
            <button
              key={size}
              className={`px-3 py-1 rounded ${
                fontSize === size
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => handleFontSizeChange(size as 'small' | 'medium' | 'large')}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
