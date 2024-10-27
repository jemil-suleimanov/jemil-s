"use client";

import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="min-h-full p-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Technical Expertise</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                My core tech stack includes:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  'React', 
                  'Vue', 
                  'TypeScript', 
                  'Next.js', 
                  'Gatsby', 
                  'GraphQL', 
                  'Tailwind CSS'
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg leading-relaxed">
                I specialize in building stunning, performance-driven marketing websites and web applications, 
                with a strong focus on creating exceptional user experiences using modern web technologies.
              </p>
              
              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  AI Integration & Tools
                </h3>
                <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  I&apos;m deeply interested in AI technologies and actively integrate various AI tools into my workflow:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Cursor AI',
                    'ChatGPT',
                    'Claude',
                    'Perplexity'
                  ].map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  I leverage these AI tools to enhance development productivity, automate routine tasks, 
                  and stay at the forefront of technological innovation. This allows me to focus on complex 
                  problem-solving and delivering higher-quality solutions more efficiently.
                </p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Skills;
