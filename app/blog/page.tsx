import React from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import BlogPostList from '@/components/BlogPostList';

export default async function BlogPage() {
  const posts = await sanityFetch({ query: POSTS_QUERY });

  return (
    <div className="blog-page bg-background text-foreground min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Sarcastically Overengineered
          </h1>
          <p className="text-xl text-gray-400 italic">
            Where code meets wit, and bugs are features
          </p>
        </header>
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
