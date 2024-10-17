"use client";

import React, { useState } from 'react';
import { FaFolder, FaSearch } from 'react-icons/fa';

interface IconSidebarProps {
  onToggleExplorer: () => void;
  onToggleSearch: () => void;
}

const IconSidebar: React.FC<IconSidebarProps> = ({ onToggleExplorer, onToggleSearch }) => {
  const [activeIcon, setActiveIcon] = useState<'explorer' | 'search'>('explorer');

  const handleIconClick = (icon: 'explorer' | 'search') => {
    setActiveIcon(icon);
    if (icon === 'explorer') {
      onToggleExplorer();
    } else {
      onToggleSearch();
    }
  };

  return (
    <div className="w-12 bg-gray-200 dark:bg-[#333333] flex flex-col items-center py-4">
      <button
        onClick={() => handleIconClick('explorer')}
        className={`p-2 mb-2 ${activeIcon === 'explorer' ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
      >
        <FaFolder className="text-gray-600 dark:text-[#cccccc]" size={24} />
      </button>
      <button
        onClick={() => handleIconClick('search')}
        className={`p-2 ${activeIcon === 'search' ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
      >
        <FaSearch className="text-gray-600 dark:text-[#cccccc]" size={24} />
      </button>
    </div>
  );
};

export default IconSidebar;
