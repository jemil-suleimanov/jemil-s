'use client'

import { useEffect, useState } from 'react';
import { Post } from '../types';

type Posts = ({slug: string} & Post)[]

export default function PostsPage() {
    const [posts, setPosts] = useState<Posts>([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('/api/posts');
            const data = await response.json() as Posts;
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <h2>{post.data.title}</h2>
                        <p>{post.data.shortDescription}</p>
                        <p>{`Published on: ${post.data.date}`}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
