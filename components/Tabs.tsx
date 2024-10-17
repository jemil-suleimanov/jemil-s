"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

interface Tab {
  name: string;
  path: string;
}

interface TabsProps {
  tabs: Tab[];
  onCloseTab: (path: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onCloseTab }) => {
  const pathname = usePathname();

  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center px-4 py-2 border-r border-gray-300 dark:border-gray-700 ${
            pathname === tab.path ? 'bg-white dark:bg-gray-900' : ''
          }`}
        >
          <Link href={tab.path} className="mr-2">
            {tab.name}
          </Link>
          <button
            onClick={() => onCloseTab(tab.path)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
