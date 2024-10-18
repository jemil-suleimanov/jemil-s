'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const ProjectPage: React.FC = () => {
  const params = useParams();
  const projectId = params.id;

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Project {projectId}</h2>
      <p>This is the detailed view of project {projectId}.</p>
    </div>
  );
};

export default ProjectPage;
