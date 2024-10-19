"use client";

import React from 'react';
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
}

const Tabs: React.FC<TabsProps> = ({ tabs, onCloseTab }) => {
  const pathname = usePathname();

  return (
    <div className="flex bg-sidebar-bg text-sidebar-fg overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
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
