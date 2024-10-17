"use client";

import React from 'react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker'
];

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
