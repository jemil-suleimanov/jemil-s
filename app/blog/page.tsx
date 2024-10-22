'use client'

import React, { useState, useCallback } from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import { POSTS_QUERY, TOTAL_POSTS_COUNT } from '@/sanity/lib/queries';
import BlogPostList from '@/components/BlogPostList';

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await sanityFetch({
      query: POSTS_QUERY,
      params: { limit: posts.length + POSTS_PER_PAGE }
    });
    setPosts(newPosts);
    setLoading(false);
  }, [posts.length]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      const initialPosts = await sanityFetch({
        query: POSTS_QUERY,
        params: { limit: POSTS_PER_PAGE }
      });
      setPosts(initialPosts);
      const total = await sanityFetch({ query: TOTAL_POSTS_COUNT });
      setTotalPosts(total);
      setLoading(false);
    };

    fetchInitialData();
  }, []);

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
        {posts.length < totalPosts && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMorePosts}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
