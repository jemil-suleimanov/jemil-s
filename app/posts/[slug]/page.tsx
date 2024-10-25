'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Post } from '@/app/types';

export default function PostPage() {
    const params = useParams();
    const { slug } = params; // Access the dynamic slug parameter
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (!slug) return;

        async function fetchPost() {
            const response = await fetch(`/api/posts/${slug}`);
            const data = await response.json() as Post;
            setPost(data);
        }

        fetchPost();
    }, [slug]);

    if (!post) return <p>Loading...</p>;

    console.log(post);

    return (
        <article className="max-w-3xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-4">{post.data.title}</h2>
            <p className="mb-2">{post.data.shortDescription}</p>
            <p className="text-sm mb-4">{`Published on: ${post.data.date}`}</p>
            {post.data.tags && post.data.tags.length > 0 && (
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {post.data.tags.map((tag: string) => (
                            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <MarkdownRenderer markdown={post.content} />
        </article>
    );
}
