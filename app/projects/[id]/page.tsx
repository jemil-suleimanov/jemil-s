import React from 'react';
import Link from 'next/link';


const ProjectPage: React.FC = () => {

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2">
        Git Diff AI: Simplifying Your Commit Messages
      </h1>
      
      <p className="mb-6 leading-relaxed">
        Let’s be honest: writing commit messages can be a drag. As developers, we often find ourselves staring at a screen, struggling to describe what we just did. That’s where <strong>Git Diff AI</strong> comes in—a tool designed to take the hassle out of generating commit messages by leveraging AI. Because let’s face it, sometimes we’re just too lazy to put in the effort!
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
        How It Works
      </h2>
      <p className="mb-6 leading-relaxed">
        Git Diff AI analyzes your staged changes and generates meaningful commit messages in seconds. I’ve been experimenting with different AI models to find the one that truly gets the job done, and after trying various options, I discovered that the <strong>Qwen 2.5:7B</strong> model is the best fit for this task. It strikes the perfect balance between understanding code changes and crafting concise messages.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
        The Journey
      </h2>
      <p className="mb-6 leading-relaxed">
        Building Git Diff AI was a fun challenge! Using <strong>Cursor AI</strong>, I whipped up this tool in just a couple of days. The idea was simple: take advantage of advanced AI to automate a mundane task that we all dread. The result? A seamless way to enhance your commit process without the headache of figuring out what to write.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
        Why You Need It
      </h2>
      <p className="mb-6 leading-relaxed">
        Whether you’re a solo developer or part of a team, Git Diff AI makes your life easier. You can focus on what really matters—writing code—while the tool takes care of documenting your changes. It’s a win-win situation! Plus, with the power of AI at your fingertips, you’ll never have to worry about vague commit messages again.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
        Join the Revolution
      </h2>
      <p className="mb-6 leading-relaxed">
        I’m excited about the potential of Git Diff AI and the difference it can make for developers everywhere. If you want to be part of this journey, check out the project on GitHub, and let’s make our commit messages smarter together!
      </p>

      <Link href="/projects" className="mt-8 inline-block text-blue-600 hover:underline font-semibold">
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectPage;
