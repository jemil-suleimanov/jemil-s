"use client";

import { BaseSidebar } from '@/src/shared/components/layout/BaseSidebar';
import React from 'react';
import { FaFolder, FaSearch, FaCog, FaRobot } from 'react-icons/fa';

interface IconSidebarProps {
  onToggleExplorer: () => void;
  onToggleSearch: () => void;
  onToggleSettings: () => void;
  onToggleAIChat: () => void;
  activeSidebars: {
    explorer: boolean;
    search: boolean;
    settings: boolean;
    aiChat: boolean;
  };
}

const IconSidebar: React.FC<IconSidebarProps> = ({ 
  onToggleExplorer, 
  onToggleSearch, 
  onToggleSettings, 
  onToggleAIChat,
  activeSidebars 
}) => {
  return (
    <BaseSidebar width="133" className="flex flex-col items-center py-4 justify-between">
      <div>
        <button
          onClick={onToggleExplorer}
          className={`p-2 mb-2 ${activeSidebars.explorer ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaFolder className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
        <button
          onClick={onToggleSearch}
          className={`p-2 ${activeSidebars.search ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaSearch className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
      </div>
      <div>
        <button
          onClick={onToggleAIChat}
          className={`p-2 mb-2 ${activeSidebars.aiChat ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaRobot className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
        <button
          onClick={onToggleSettings}
          className={`p-2 ${activeSidebars.settings ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaCog className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
      </div>
    </BaseSidebar>
  );
};

export default IconSidebar;
