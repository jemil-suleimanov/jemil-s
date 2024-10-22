// ./src/sanity/lib/queries.ts

import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  shortDescription,
  publishedAt,
  slug,
} [0...$limit]`;

export const TOTAL_POSTS_COUNT = groq`count(*[_type == "post" && defined(slug.current)])`;
