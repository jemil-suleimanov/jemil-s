"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'small' | 'medium' | 'large';

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  useEffect(() => {
    const storedSize = localStorage.getItem('fontSize') as FontSize | null;
    if (storedSize) {
      setFontSize(storedSize);
    }
  }, []);

  const updateFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.style.fontSize = size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px';
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize: updateFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
