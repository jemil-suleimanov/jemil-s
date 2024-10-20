'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';
import IconSidebar from '../components/IconSidebar';
import SettingsSidebar from '../components/SettingsSidebar';
import AIChatSidebar from '../components/AIChatSidebar';
import StoreProvider from '../components/StoreProvider';
import ThemeHandler from '../components/ThemeHandler';
import FontFamilyHandler from '../components/FontFamilyHandler';
import "./globals.css";
import FontSizeHandler from '../components/FontSizeHandler';

const RootLayoutContent = React.memo(({ children }: { children: React.ReactNode }) => {
  const [openTabs, setOpenTabs] = useState<{ id: string; name: string; path: string }[]>([
    { id: 'home', name: 'page.tsx', path: '/' }
  ]);

  const pathname = usePathname();
  const router = useRouter();

  // Remove the fontFamily effect from here

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

  RootLayoutContent.displayName = 'RootLayoutContent';

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Top System Bar */}
      <div className="bg-sidebar-bg text-sidebar-fg h-8 flex items-center justify-between px-4 border-b border-gray-300 dark:border-[#252526]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
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
          <div className="w-64 bg-sidebar-bg text-sidebar-fg overflow-y-auto border-r border-gray-200 dark:border-[#1e1e1e]">
            {leftSidebar === 'explorer' && <FileExplorer />}
            {leftSidebar === 'search' && (
              <div className="p-4">Search functionality coming soon...</div>
            )}
          </div>
        )}

        <div className="flex-1 overflow-hidden flex flex-col bg-background text-foreground">
          <Tabs tabs={openTabs} onCloseTab={handleCloseTab} />
          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>

        {rightSidebar && (
          <div className="w-64 bg-sidebar-bg text-sidebar-fg overflow-y-auto border-l border-gray-200 dark:border-[#1e1e1e]">
            {rightSidebar === 'settings' && <SettingsSidebar />}
            {rightSidebar === 'aiChat' && <AIChatSidebar />}
          </div>
        )}
      </div>

      {/* Bottom Terminal */}
      <div className="h-32 bg-[var(--terminal-bg)] text-sidebar-fg border-t border-gray-200 dark:border-[#252526]">
        {/* Terminal content (to be implemented) */}
      </div>
    </div>
  );
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <ThemeHandler />
          <FontFamilyHandler />
          <FontSizeHandler />
          <RootLayoutContent>{children}</RootLayoutContent>
        </StoreProvider>
      </body>
    </html>
  );
}
