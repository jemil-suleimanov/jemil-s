"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Me from '@/public/images/me.webp';
import { useAppSelector, useAppDispatch } from './lib/hooks';
import { setTheme } from '@/app/lib/slices/theme.slice';
import { themes } from '@/app/lib/slices/theme.slice';


const Home: React.FC = () => {
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const linkedinLink = "https://www.linkedin.com/in/jemil-suleimanov-559852116/";

  const contactMe = () => {
    setIsContactClicked(true);
  };

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    dispatch(setTheme(themes[nextIndex]));
  };

  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground font-mono">
      <div className="max-w-4xl p-8 flex items-center gap-12">
        <div>
          <div className="pt-10">
            <p className="font-mono text-sm text-secondary -ml-6">{"</h1>"}</p>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jemil Suleimanov
            </h1>   
            <p className="font-mono text-sm text-secondary mb-6 -mr-8 text-right">{"</h1>"}</p>
          </div>
          <p className="text-2xl mb-8">Frontend Developer</p>
          <div className="space-y-2">
            <div 
              className="cursor-pointer hover:text-primary transition-colors duration-200"
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => {
                setIsContactHovered(false);
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
                  <span className="text-gray-500">
                    <span className="inline-block animate-[pointing_1s_ease-in-out_infinite]">👉</span>{" "}
                    <a 
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                    >
                      open profile
                    </a>
                  </span>
                  <br />
                </div>
              ) : (
                <span className="text-gray-500">
                  {" "} {isContactHovered ? "Click!" : "Get in touch"} 
                </span>
              )}
              {" "}&#125;
            </div>
          </div>
        </div>

        {/* Profile image with colorful shadow */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-200"></div>
          <div className="relative rounded-full overflow-hidden w-[300px] h-[300px] border-2 border-secondary">
            <Image
              onClick={cycleTheme}
              src={Me}
              alt="Jemil Suleimanov"
              width={300}
              height={300}
              className="object-cover cursor-pointer"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
