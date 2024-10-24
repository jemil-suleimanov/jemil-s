import React from 'react';

const Home: React.FC = async () => {

  return (
    <div className="h-full flex items-center justify-center bg-background text-foreground font-mono">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-6xl font-bold mb-4">Jemil Suleimanov</h1>
        <p className="text-2xl mb-8">Frontend Developer</p>
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-primary">
            viewWork = () =&gt; &#123; /* View my projects */ &#125;
          </p>
          <p className="cursor-pointer hover:text-primary">
            contactMe = () =&gt; &#123; /* Get in touch */ &#125;
          </p>
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
