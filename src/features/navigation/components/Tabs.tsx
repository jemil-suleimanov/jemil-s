"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import { DiReact } from 'react-icons/di';
import { SiVuedotjs, SiJson } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/lib/store';
import { removeTab } from '@/src/lib/slices/tabs.slice';

const Tabs: React.FC = () => {
  const tabs = useSelector((state: RootState) => state.tabs.tabs);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleCloseTab = async (path: string) => {
    if (tabs.length <= 1) return;

    const tabIndex = tabs.findIndex(tab => tab.path === path);
    const remainingTabs = tabs.filter(tab => tab.path !== path);
    
    if (path === pathname) {
      const nextTab = remainingTabs[tabIndex - 1] || remainingTabs[tabIndex];
      dispatch(removeTab(path));
      await router.push(nextTab.path);
    } else {
      dispatch(removeTab(path));
    }
  };

  const getTabIcon = (path: string) => {
    if (path === '/' || path.startsWith('/about') || path.startsWith('/skills')) {
      return <DiReact className="mr-2 text-[#61DAFB]" />;
    }
    if (path.startsWith('/projects')) {
      return <SiVuedotjs className="mr-2 text-[#4FC08D]" />;
    }
    if (path.startsWith('/settings')) {
      return <SiJson className="mr-2 text-[#FAC54B]" />;
    }
    return null;
  };

  return (
    <div className="flex bg-sidebar-bg text-sidebar-fg overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center px-4 py-2 cursor-pointer border-r border-gray-300 dark:border-[#252526] ${
            tab.path === pathname ? 'bg-background text-foreground' : ''
          }`}
        >
          <Link href={tab.path} className="flex items-center mr-2 text-sm">
            {getTabIcon(tab.path)}
            {tab.name}
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCloseTab(tab.path);
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
