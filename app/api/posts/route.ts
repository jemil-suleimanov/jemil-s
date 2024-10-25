import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data');

export async function GET() {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename, 'index.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        const { data } = matter(fileContents);

        console.log(data, 'data')

        return {
            slug: filename,
            data,
        };
    });

    return NextResponse.json(posts);
}
