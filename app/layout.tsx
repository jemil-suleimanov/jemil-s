'use client'

import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openTabs, setOpenTabs] = useState<{ name: string; path: string }[]>([
    { name: 'hero.tsx', path: '/' }
  ]);
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname;
    const tabName = currentPath === '/' ? 'hero.tsx' : currentPath.split('/').pop() || '';
    
    if (!openTabs.some(tab => tab.path === currentPath)) {
      setOpenTabs(prev => [...prev, { name: tabName, path: currentPath }]);
    }
  }, [pathname, openTabs]);

  const handleCloseTab = (path: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.path !== path));
    if (pathname === path && openTabs.length > 1) {
      window.history.pushState(null, '', openTabs[0]?.path || '/');
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900`}
      >
        <ThemeProvider attribute="class">
          <div className="flex flex-col h-screen">
            {/* Top System Bar */}
            <div className="bg-gray-200 dark:bg-gray-800 h-8 flex items-center justify-between px-4">
              {/* macOS window controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Left Sidebar */}
              <div className="w-64 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
                <FileExplorer />
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <Tabs tabs={openTabs} onCloseTab={handleCloseTab} />
                <div className="flex-1 overflow-y-auto p-4">
                  {children}
                </div>
              </div>
            </div>

            {/* Bottom Terminal (placeholder for future implementation) */}
            <div className="h-32 bg-gray-200 dark:bg-gray-800">
              {/* Terminal content (to be implemented) */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
