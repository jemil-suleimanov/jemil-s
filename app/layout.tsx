'use client'

import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';
import IconSidebar from '../components/IconSidebar';

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
  const [showExplorer, setShowExplorer] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
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

  const toggleExplorer = () => {
    setShowExplorer(true);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowExplorer(false);
    setShowSearch(true);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#1e1e1e] text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex flex-col h-screen">
            {/* Top System Bar */}
            <div className="bg-gray-200 dark:bg-[#3c3c3c] h-8 flex items-center justify-between px-4 border-b border-gray-300 dark:border-[#252526]">
              {/* macOS window controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Icon Sidebar */}
              <IconSidebar onToggleExplorer={toggleExplorer} onToggleSearch={toggleSearch} />

              {/* Explorer/Search Panel */}
              {(showExplorer || showSearch) && (
                <div className="w-64 bg-gray-100 dark:bg-[#252526] overflow-y-auto border-r border-gray-200 dark:border-[#1e1e1e]">
                  {showExplorer && <FileExplorer />}
                  {showSearch && (
                    <div className="p-4 text-gray-800 dark:text-[#cccccc]">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-white dark:bg-[#3c3c3c] text-gray-800 dark:text-[#cccccc] p-2 rounded"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Main Content Area */}
              <div className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-[#1e1e1e]">
                <Tabs tabs={openTabs} onCloseTab={handleCloseTab} />
                <div className="flex-1 overflow-y-auto p-4">
                  {children}
                </div>
              </div>
            </div>

            {/* Bottom Terminal (placeholder for future implementation) */}
            <div className="h-32 bg-gray-100 dark:bg-[#1e1e1e] border-t border-gray-200 dark:border-[#252526]">
              {/* Terminal content (to be implemented) */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
