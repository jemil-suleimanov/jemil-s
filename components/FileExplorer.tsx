"use client";

import React from 'react';
import Link from 'next/link';
import { FaFolder, FaFile } from 'react-icons/fa';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  path: string;
  children?: FileItem[];
}

const fileStructure: FileItem[] = [
  {
    name: 'Homepage',
    type: 'folder',
    path: '/',
    children: [
      { name: 'hero.tsx', type: 'file', path: '/' },
      { name: 'about.tsx', type: 'file', path: '/about' },
      { name: 'skills.tsx', type: 'file', path: '/skills' },
    ],
  },
  {
    name: 'Projects',
    type: 'folder',
    path: '/projects',
    children: [
      { name: 'project1.py', type: 'file', path: '/projects/1' },
      { name: 'project2.php', type: 'file', path: '/projects/2' },
    ],
  },
  {
    name: 'Blog',
    type: 'folder',
    path: '/blog',
    children: [
      { name: 'post1.md', type: 'file', path: '/blog/1' },
      { name: 'post2.md', type: 'file', path: '/blog/2' },
    ],
  },
  { name: 'settings.json', type: 'file', path: '/settings' },
];

const FileExplorer: React.FC = () => {
  const renderFileItem = (item: FileItem) => (
    <div key={item.path} className="pl-4">
      <Link href={item.path} className="flex items-center py-1 hover:bg-gray-200 dark:hover:bg-gray-700">
        {item.type === 'folder' ? <FaFolder className="mr-2" /> : <FaFile className="mr-2" />}
        {item.name}
      </Link>
      {item.children && (
        <div className="pl-4">
          {item.children.map(renderFileItem)}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Explorer</h2>
      {fileStructure.map(renderFileItem)}
    </div>
  );
};

export default FileExplorer;
