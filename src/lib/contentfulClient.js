import { createClient } from 'contentful';

// Fallbacks ensure dev works even if .env is missing
const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID || 'mqb9tst1zfep';
const accessToken = process.env.REACT_APP_CONTENTFUL_CDA_TOKEN || 'bHngJ1GXOYzhOtx5JxiwyF2b5bUXiINrB4rwLj2evnA';
const environment = process.env.REACT_APP_CONTENTFUL_ENV || 'master';

export const contentfulClient = createClient({ space, accessToken, environment });

export async function fetchBlogPosts(limit = 12, skip = 0) {
  const res = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishedDate',
    limit,
    skip,
  });
  return res.items;
}

export async function fetchBlogPostBySlug(slug) {
  const res = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return res.items?.[0] || null;
}


