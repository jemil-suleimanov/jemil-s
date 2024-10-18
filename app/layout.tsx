'use client'

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';
import IconSidebar from '../components/IconSidebar';
import SettingsSidebar from '../components/SettingsSidebar';
import AIChatSidebar from '../components/AIChatSidebar';
import { FontSizeProvider, useFontSize } from './contexts/FontSizeContext';
import { FontFamilyProvider, useFontFamily } from './contexts/FontFamilyContext';
import "./globals.css";

const RootLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { fontSize } = useFontSize();
  const { fontFamily } = useFontFamily();
  const [openTabs, setOpenTabs] = useState<{ id: string; name: string; path: string }[]>([
    { id: 'home', name: 'page.tsx', path: '/' }
  ]);
  const [activeSidebars, setActiveSidebars] = useState({
    explorer: true,
    search: false,
    settings: false,
    aiChat: false
  });
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.style.fontSize = 
      fontSize === 'small' ? '14px' : fontSize === 'medium' ? '16px' : '18px';
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.style.fontFamily = fontFamily;
  }, [fontFamily]);

  useEffect(() => {
    const currentPath = pathname;
    let tabName = 'page.tsx';
    let tabId = 'home';

    if (currentPath !== '/') {
      const pathParts = currentPath.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      
      if (pathParts[1] === 'projects') {
        tabName = `project${lastPart}.tsx`;
        tabId = `project-${lastPart}`;
      } else if (pathParts[1] === 'blog') {
        tabName = `post${lastPart}.md`;
        tabId = `blog-${lastPart}`;
      } else {
        tabName = `${lastPart}.tsx`;
        tabId = lastPart;
      }
    }

    if (!openTabs.some(tab => tab.path === currentPath)) {
      setOpenTabs(prev => [...prev, { id: tabId, name: tabName, path: currentPath }]);
    }
  }, [pathname, openTabs]);

  const handleCloseTab = (id: string) => {
    setOpenTabs(prev => {
      const index = prev.findIndex(tab => tab.id === id);
      if (index === -1) return prev;

      const newTabs = prev.filter(tab => tab.id !== id);
      
      // If we're closing the current tab, navigate to the tab to the left or the first tab
      if (prev[index].path === pathname) {
        const newPath = index > 0 ? prev[index - 1].path : (newTabs[0]?.path || '/');
        router.push(newPath);
      }

      return newTabs;
    });
  };

  const [leftSidebar, setLeftSidebar] = useState<'explorer' | 'search' | null>('explorer');
  const [rightSidebar, setRightSidebar] = useState<'settings' | 'aiChat' | null>(null);

  const toggleSidebar = (sidebar: 'explorer' | 'search' | 'settings' | 'aiChat') => {
    if (sidebar === 'explorer' || sidebar === 'search') {
      setLeftSidebar(prev => prev === sidebar ? null : sidebar);
    } else {
      setRightSidebar(prev => prev === sidebar ? null : sidebar);
    }
  };

  return (
    <div className={`flex flex-col h-screen bg-white dark:bg-[#1e1e1e] text-black dark:text-white`} style={{ fontFamily }}>
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
        <IconSidebar
          onToggleExplorer={() => toggleSidebar('explorer')}
          onToggleSearch={() => toggleSidebar('search')}
          onToggleSettings={() => toggleSidebar('settings')}
          onToggleAIChat={() => toggleSidebar('aiChat')}
          activeSidebars={{
            explorer: leftSidebar === 'explorer',
            search: leftSidebar === 'search',
            settings: rightSidebar === 'settings',
            aiChat: rightSidebar === 'aiChat'
          }}
        />

        {leftSidebar && (
          <div className="w-64 bg-gray-100 dark:bg-[#252526] overflow-y-auto border-r border-gray-200 dark:border-[#1e1e1e]">
            {leftSidebar === 'explorer' && <FileExplorer />}
            {leftSidebar === 'search' && (
              <div className="p-4">Search functionality coming soon...</div>
            )}
          </div>
        )}

        <div className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-[#1e1e1e]">
          <Tabs tabs={openTabs} onCloseTab={handleCloseTab} />
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>

        {rightSidebar && (
          <div className="w-64 bg-gray-100 dark:bg-[#252526] overflow-y-auto border-l border-gray-200 dark:border-[#1e1e1e]">
            {rightSidebar === 'settings' && <SettingsSidebar />}
            {rightSidebar === 'aiChat' && <AIChatSidebar />}
          </div>
        )}
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FontSizeProvider>
            <FontFamilyProvider>
              <RootLayoutContent>{children}</RootLayoutContent>
            </FontFamilyProvider>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
