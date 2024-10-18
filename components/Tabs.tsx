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

  console.log(tabs, 'tabs');

  return (
    <div className="flex bg-gray-100 dark:bg-[#252526] overflow-x-auto">
      {tabs.map((tab, index) => (
        <div
          key={`${tab.id}-${index}`}
          className={`flex items-center px-4 py-2 border-r border-gray-200 dark:border-[#1e1e1e] ${
            pathname === tab.path ? 'bg-white dark:bg-[#1e1e1e]' : 'bg-gray-50 dark:bg-[#2d2d2d]'
          }`}
        >
          <Link href={tab.path} className="mr-2 text-sm text-gray-800 dark:text-[#cccccc]">
            {tab.name}
          </Link>
          <button
            onClick={() => onCloseTab(tab.id)}
            className="text-gray-500 dark:text-[#cccccc] hover:text-gray-700 dark:hover:text-white"
          >
            <IoClose size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
