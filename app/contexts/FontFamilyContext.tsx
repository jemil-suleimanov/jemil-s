"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type FontFamily = 'monospace' | 'sans-serif' | 'serif';

interface FontFamilyContextType {
  fontFamily: FontFamily;
  setFontFamily: (family: FontFamily) => void;
}

const FontFamilyContext = createContext<FontFamilyContextType | undefined>(undefined);

export const FontFamilyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontFamily, setFontFamily] = useState<FontFamily>('monospace');

  useEffect(() => {
    const storedFamily = localStorage.getItem('fontFamily') as FontFamily | null;
    if (storedFamily) {
      setFontFamily(storedFamily);
    }
  }, []);

  const updateFontFamily = (family: FontFamily) => {
    setFontFamily(family);
    localStorage.setItem('fontFamily', family);
  };

  return (
    <FontFamilyContext.Provider value={{ fontFamily, setFontFamily: updateFontFamily }}>
      {children}
    </FontFamilyContext.Provider>
  );
};

export const useFontFamily = () => {
  const context = useContext(FontFamilyContext);
  if (context === undefined) {
    throw new Error('useFontFamily must be used within a FontFamilyProvider');
  }
  return context;
};
