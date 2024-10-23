import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { POSTS_QUERY, TOTAL_POSTS_COUNT } from '@/sanity/lib/queries';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit') || '5');

  const posts = await client.fetch(POSTS_QUERY, { limit });
  const totalPosts = await client.fetch(TOTAL_POSTS_COUNT);

  return NextResponse.json({ posts, totalPosts });
}
