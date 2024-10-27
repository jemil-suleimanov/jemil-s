"use client";

import React from 'react';
import { IconType } from 'react-icons';
import { 
  FaReact, FaVuejs
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiGatsby,
  SiGraphql, SiTailwindcss, SiJest,
  SiRedux, SiWebpack,
  SiHtml5, SiCss3, SiCypress, SiVite, SiContentful, 
  SiBootstrap, SiMongodb, SiJavascript
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: IconType;
  description?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core languages I use for web development",
    skills: [
      { 
        name: "JavaScript", 
        icon: SiJavascript,
        description: "Building interactive and dynamic web applications"
      },
      { 
        name: "TypeScript", 
        icon: SiTypescript,
        description: "Ensuring type safety and code reliability"
      },
      { 
        name: "HTML5", 
        icon: SiHtml5,
        description: "Creating semantic and accessible web structures"
      },
      { 
        name: "CSS3", 
        icon: SiCss3,
        description: "Crafting responsive and modern designs"
      }
    ]
  },
  {
    title: "Frameworks",
    description: "Modern frameworks I use for building scalable applications",
    skills: [
      { 
        name: "React", 
        icon: FaReact,
        description: "Building component-based user interfaces"
      },
      { 
        name: "Vue.js", 
        icon: FaVuejs,
        description: "Developing reactive web applications"
      },
      { 
        name: "Next.js", 
        icon: SiNextdotjs,
        description: "Creating SEO-friendly React applications"
      },
      { 
        name: "Gatsby.js", 
        icon: SiGatsby,
        description: "Building static sites with React"
      }
    ]
  },
  {
    title: "Tools & Technologies",
    description: "Additional tools and technologies in my development stack",
    skills: [
      { 
        name: "Redux", 
        icon: SiRedux,
        description: "Managing complex application state"
      },
      { 
        name: "Tailwind CSS", 
        icon: SiTailwindcss,
        description: "Rapid UI development with utility classes"
      },
      { 
        name: "Jest", 
        icon: SiJest,
        description: "Unit testing JavaScript applications"
      },
      { 
        name: "Cypress", 
        icon: SiCypress,
        description: "End-to-end testing web applications"
      },
      { 
        name: "GraphQL", 
        icon: SiGraphql,
        description: "Efficient API data fetching"
      },
      { 
        name: "Webpack", 
        icon: SiWebpack,
        description: "Bundling and optimizing assets"
      },
      { 
        name: "Vite", 
        icon: SiVite,
        description: "Fast modern build tooling"
      },
      { 
        name: "Headless CMS", 
        icon: SiContentful,
        description: "Content management for web apps"
      },
      { 
        name: "Bootstrap", 
        icon: SiBootstrap,
        description: "Rapid responsive development"
      },
      { 
        name: "MongoDB", 
        icon: SiMongodb,
        description: "NoSQL database integration"
      }
    ]
  }
];

const aiTools = [
  { 
    name: 'Claude 3.5',
    description: 'Advanced AI accelerating development and testing processes',
    details: [
      'Significantly improved my bug fixing efficiency',
      'Accelerated unit test creation and coverage in work projects',
    ]
  },
  {
    name: 'ChatGPT',
    description: 'Versatile AI assistant for learning and problem-solving',
    details: [
      'Learning and implementing new technologies (e.g., Cypress) at work',
      'Exploring new ideas, brainstorming, planning and reasoning',
    ]
  },
  {
    name: 'Cursor AI',
    description: 'AI-powered coding companion for enhanced productivity',
    details: [
      'Increased my coding speed and efficiency in personal projects',
      'Streamlined my code documentation process',
    ]
  },
  {
    name: 'Perplexity',
    description: 'Efficient research tool for quick exploration',
    details: [
      'Condensed information from multiple sources',
      'Time-saving research on various topics',
    ]
  }
];

const gradientTextClass = `
  group-hover:bg-clip-text group-hover:text-transparent
  group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500
  transition-all duration-200
`;

const aiToolsGradientClass = `
  group-hover:bg-clip-text group-hover:text-transparent
  group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500
  transition-all duration-200
`;

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Technical Skills
          </h1>
          
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I specialize in building high-performance web applications and visually striking marketing websites, using modern web technologies 
          and AI-driven tools where they add value and align with project goals.
          My approach combines technical precision with a strong focus on creating exceptional user experiences, ensuring that each solution is both innovative and impactful.
          </p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {category.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {category.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="group p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 
                             hover:bg-blue-50 dark:hover:bg-blue-900/20 
                             transition-all duration-200 hover:-translate-y-1
                             hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-900/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-6 h-6 text-blue-500 dark:text-blue-400 
                                          group-hover:scale-105 transition-transform duration-200" />
                    <span className={`font-medium text-gray-900 dark:text-gray-100 ${gradientTextClass}`}>
                      {skill.name}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-9">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            AI Integration & Tools
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
            I leverage cutting-edge AI tools to enhance development workflow, maintain high code quality, 
            and stay at the forefront of technological innovation. This modern approach allows me to 
            deliver solutions more efficiently while keeping up with the rapidly evolving tech landscape.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aiTools.map((tool) => (
              <div 
                key={tool.name}
                className="group p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20 
                         hover:bg-purple-100/70 dark:hover:bg-purple-900/30 
                         transition-all duration-200 hover:-translate-y-1
                         hover:shadow-md hover:shadow-purple-100 dark:hover:shadow-purple-900/10"
              >
                <h3 className={`text-lg font-medium text-purple-800 dark:text-purple-200 mb-2 ${aiToolsGradientClass}`}>
                  {tool.name}
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  {tool.description}
                </p>
                <ul className="space-y-2">
                  {tool.details.map((detail, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-sm text-purple-600 dark:text-purple-400"
                    >
                      <span className="mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
