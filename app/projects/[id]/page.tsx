"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const headingGradientClass = `
  bg-clip-text text-transparent
  bg-gradient-to-r from-blue-400 to-purple-300
  dark:from-blue-400 dark:to-purple-400
`;

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className={`text-4xl font-bold mb-6 ${headingGradientClass}`}>
            Git Diff AI
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            An intelligent CLI tool that leverages local AI models to automatically generate 
            meaningful commit messages from your code changes, enhancing development workflow 
            while maintaining data privacy.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 
                      rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            The Challenge
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Writing meaningful commit messages is often time-consuming and can break the development flow. 
            Developers need a secure, efficient solution that can analyze code changes and generate 
            descriptive commit messages without compromising sensitive code data.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 
                      rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            The Solution
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Git Diff AI is a powerful CLI tool that runs locally, analyzing your staged changes to generate 
              contextual commit messages. It prioritizes privacy by using local LLM models through Ollama, 
              ensuring your code never leaves your machine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Generates concise and descriptive git messages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Ensures data privacy with local LLM processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Flexible usage as CLI tool or npm command
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Customizable model selection
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Technical Stack
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Node.js Runtime
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    JavaScript (Core Logic)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Ollama (Local LLM Integration)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 
                      rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Development Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Built using Cursor AI in just a few days, this project demonstrates the power of AI-assisted
            development. The focus was on creating a tool that seamlessly integrates into the developer
            workflow while providing meaningful commit messages that accurately describe code changes.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium
                     flex items-center gap-2 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to Projects
          </Link>
          <a 
            href="https://github.com/jemil-c-137/git-diff-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 
                     text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 
                     transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
