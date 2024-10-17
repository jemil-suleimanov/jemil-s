'use client'

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-[#cccccc] font-mono">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-6xl font-bold mb-4">Jemil Sadikov</h1>
        <p className="text-2xl mb-8">Full Stack Web Developer</p>
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-blue-500">
            viewWork = () =&gt; &#123; /* View my projects */ &#125;
          </p>
          <p className="cursor-pointer hover:text-blue-500">
            contactMe = () =&gt; &#123; /* Get in touch */ &#125;
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <div className="text-9xl">👨‍💻</div>
      </div>
    </div>
  );
};

export default Home;
