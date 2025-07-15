import React from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, name: 'git-diff-ai', description: 'AI Powered git commit messages generating tool' },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-200 dark:bg-gray-700 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
