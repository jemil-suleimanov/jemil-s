import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/app/types';

const postsDirectory = path.join(process.cwd(), 'data');

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = path.join(postsDirectory, slug, 'index.md');

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return NextResponse.json(({ data, content }) as Post);
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
}
