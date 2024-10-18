'use client'

import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';
import IconSidebar from '../components/IconSidebar';
import { FontSizeProvider, useFontSize } from './contexts/FontSizeContext';

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

const RootLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { fontSize } = useFontSize();

  useEffect(() => {
    document.documentElement.style.fontSize = 
      fontSize === 'small' ? '14px' : fontSize === 'medium' ? '16px' : '18px';
  }, [fontSize]);

  const [openTabs, setOpenTabs] = useState<{ name: string; path: string }[]>([
    { name: 'page.tsx', path: '/' }
  ]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentPath = pathname;
    let tabName = 'page.tsx';

    if (currentPath !== '/') {
      const pathParts = currentPath.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      
      if (pathParts[1] === 'projects') {
        tabName = `project${lastPart}.tsx`;
      } else if (pathParts[1] === 'blog') {
        tabName = `post${lastPart}.md`;
      } else {
        tabName = `${lastPart}.tsx`;
      }
    }

    if (!openTabs.some(tab => tab.path === currentPath)) {
      setOpenTabs(prev => [...prev, { name: tabName, path: currentPath }]);
    }
  }, [pathname]);

  const handleCloseTab = (path: string) => {
    setOpenTabs(prev => {
      const index = prev.findIndex(tab => tab.path === path);
      if (index === -1) return prev;

      const newTabs = prev.filter(tab => tab.path !== path);
      
      // If we're closing the current tab, navigate to the tab to the left or the first tab
      if (path === pathname) {
        const newPath = index > 0 ? prev[index - 1].path : (newTabs[0]?.path || '/');
        router.push(newPath);
      }

      return newTabs;
    });
  };

  const handleToggleExplorer = () => {
    // Implement explorer toggle functionality
    console.log('Toggle explorer');
  };

  const handleToggleSearch = () => {
    // Implement search toggle functionality
    console.log('Toggle search');
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#1e1e1e] text-black dark:text-white">
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
        <IconSidebar onToggleExplorer={handleToggleExplorer} onToggleSearch={handleToggleSearch} />

        {/* Explorer/Search Panel */}
        <div className="w-64 bg-gray-100 dark:bg-[#252526] overflow-y-auto border-r border-gray-200 dark:border-[#1e1e1e]">
          <FileExplorer />
        </div>

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
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FontSizeProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
