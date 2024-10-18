'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

// Simulating data from a Headless CMS
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2023',
    shortDescription: 'Explore the cutting-edge technologies and methodologies shaping the future of web development.',
    readTime: '5 min read',
    tags: ['Web Development', 'Technology', 'Trends'],
    content: `
      <p>As we move further into 2023, the landscape of web development continues to evolve at a rapid pace. From new frameworks to innovative design paradigms, developers need to stay ahead of the curve to create cutting-edge web experiences.</p>

      <h2>1. The Rise of Web Assembly</h2>
      <p>Web Assembly (Wasm) is gaining traction as a powerful tool for bringing high-performance applications to the web. It allows developers to write code in languages like C++ or Rust and run it in the browser at near-native speed.</p>
      <img src="https://via.placeholder.com/600x400.png?text=Web+Assembly+Diagram" alt="Web Assembly Diagram" />

      <h2>2. Serverless Architecture</h2>
      <p>Serverless computing is revolutionizing how we build and deploy web applications. It offers several benefits:</p>
      <ul>
        <li>Reduced operational costs</li>
        <li>Automatic scaling</li>
        <li>Faster time to market</li>
        <li>Improved developer productivity</li>
      </ul>

      <h2>3. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering a seamless user experience across devices.</p>
      <img src="https://via.placeholder.com/600x400.png?text=Progressive+Web+Apps" alt="Progressive Web Apps" />

      <p>As we embrace these new technologies, it's clear that the future of web development is bright and full of possibilities. Stay tuned for more updates and deep dives into these exciting trends!</p>
    `
  },
  // Add more blog posts here...
];

const BlogPost: React.FC = () => {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{post.shortDescription}</p>
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">{post.readTime}</span>
        <div className="flex space-x-2">
          {post.tags.map(tag => (
            <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPost;
