import React from 'react';
import Link from 'next/link';

interface BlogPost {
    _id: string;
    title: string;
    shortDescription: string;
    publishedAt: string;
    slug: { current: string };
}

interface BlogPostListProps {
    posts: BlogPost[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="block group"
        >
          <article className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 synthwave:from-purple-900 synthwave:to-pink-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 synthwave:border-pink-700">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 dark:text-white synthwave:text-transparent synthwave:bg-clip-text synthwave:bg-gradient-to-r synthwave:from-cyan-400 synthwave:to-pink-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 synthwave:group-hover:from-cyan-300 synthwave:group-hover:to-pink-300 transition-all duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 synthwave:text-pink-200 mb-4 line-clamp-2">
                {post.shortDescription}
              </p>
              <div className="flex justify-between items-center text-sm">
                <time className="text-gray-500 dark:text-gray-400 synthwave:text-pink-300">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-indigo-600 dark:text-indigo-400 synthwave:text-cyan-400 font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 synthwave:group-hover:text-cyan-300 transition-colors duration-300 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;
