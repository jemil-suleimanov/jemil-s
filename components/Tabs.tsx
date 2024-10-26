"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

interface Tab {
  id: string;
  name: string;
  path: string;
}

interface TabsProps {
  tabs: Tab[];
  onCloseTab: (id: string) => void;
  onAddTab: (path: string, name: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onCloseTab, onAddTab }) => {
  const pathname = usePathname();

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === pathname);
    if (!currentTab) {
      // If the current path is not in tabs, add it
      onAddTab(pathname, getTabNameFromPath(pathname));
    }
  }, [pathname, tabs, onAddTab]);

  const getTabNameFromPath = (path: string): string => {
    // Extract a name from the path, e.g., '/projects/123' becomes 'Project 123'
    const parts = path.split('/').filter(Boolean);
    if (parts.length === 0) return 'Home';
    return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  };

  // Ensure unique tabs
  const uniqueTabs = tabs.reduce((acc: Tab[], current) => {
    const x = acc.find(item => item.path === current.path);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div className="flex bg-sidebar-bg text-sidebar-fg overflow-x-auto">
      {uniqueTabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center px-4 py-2 cursor-pointer border-r border-gray-300 dark:border-[#252526] ${
            tab.path === pathname ? 'bg-background text-foreground' : ''
          }`}
        >
          <Link href={tab.path} className="mr-2 text-sm">
            {tab.name}
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              onCloseTab(tab.id);
            }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <IoClose size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
