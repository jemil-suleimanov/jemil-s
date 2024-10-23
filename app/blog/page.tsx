'use client'

import React, { useState, useEffect, useCallback } from 'react';
import BlogPostList, { BlogPost } from '@/components/BlogPostList';

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async (limit: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts?limit=${limit}`);
      const data = await response.json();
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts(POSTS_PER_PAGE);
  }, [fetchPosts]);

  const loadMorePosts = useCallback(() => {
    fetchPosts(posts.length + POSTS_PER_PAGE);
  }, [fetchPosts, posts.length]);

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
