"use client";

import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);

  const linkedinLink = "https://www.linkedin.com/in/jemil-suleimanov-559852116/";

  const contactMe = () => {
    setIsContactClicked(true);
    
    // Add delay before navigation
    setTimeout(() => {
      window.open(linkedinLink, '_blank');
    }, 2500);
  };

  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground font-mono">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-6xl font-bold mb-4">Jemil Suleimanov</h1>
        <p className="text-2xl mb-8">Frontend Developer</p>
        <div className="space-y-2">
          <div 
            className="cursor-pointer hover:text-primary transition-colors duration-200"
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => {
              setIsContactHovered(false);
              setIsContactClicked(false);
            }}
            onClick={contactMe}
          >
            <span className="text-blue-500">const</span>{" "}
            contactMe = () =&gt; &#123;
            {isContactClicked ? (
              <div className='pl-8'>
                <br />
                <span className="text-purple-500">const</span>
                <span className="text-gray-700"> linkedinLink = </span>
                <span className="text-green-600">&quot;https://www.linkedin.com/in/jemil-suleimanov/&quot;</span>;
                <br />
                <span className="text-purple-500">const</span>
                <span className="text-gray-700"> a = </span>
                <span className="text-blue-500">document</span>.<span className="text-yellow-500">createElement</span>(<span className="text-green-600">&quot;a&quot;</span>);
                <br />
                <span className="text-gray-700">a.href = linkedinLink;</span>
                <br />
                <span className="text-gray-700">a.target = </span><span className="text-green-600">&quot;_blank&quot;</span>;
                <br />
                <span className="text-gray-700">a.click();</span>
                <br />
                <span className="text-gray-500">Opening LinkedIn profile...</span>
                <br />
              </div>
            ) : (
              <span className="text-gray-500">
                {" "}/* {isContactHovered ? "Click!" : "Get in touch"} */
              </span>
            )}
            {" "}&#125;
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <div className="
          text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem]
          transition-all duration-300
          relative
          opacity-0
        ">
          <div className="
            absolute inset-0
            bg-gradient-to-br from-primary to-secondary
            opacity-50 blur-2xl
            transform scale-110
            z-0
          "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
