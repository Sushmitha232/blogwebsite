/**
 * Utility functions for the blog application
 */

import { BlogPost } from './types';

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

export function truncateText(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .trim();
}

export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatBlogPost(post: BlogPost) {
  return {
    ...post,
    formattedDate: formatDate(post.published_at),
    readingTime: getReadingTime(post.body),
    excerpt: truncateText(post.description || post.body, 150),
  };
}

export function generateMetaTags(post: BlogPost) {
  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.description;
  const keywords = post.seo?.keywords?.join(', ') || '';

  return {
    title,
    description,
    keywords,
    ogImage: post.featured_image?.url,
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog/${post.slug}`,
  };
}
