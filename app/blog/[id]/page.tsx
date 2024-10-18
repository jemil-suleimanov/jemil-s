'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const BlogPostPage: React.FC = () => {
  const params = useParams();
  const postId = params.id;

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Blog Post {postId}</h2>
      <p>This is the content of blog post {postId}.</p>
    </div>
  );
};

export default BlogPostPage;
