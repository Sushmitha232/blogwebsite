import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  region: process.env.CONTENTSTACK_REGION === 'EU' ? Contentstack.Region.EU : Contentstack.Region.US,
});

export default Stack;

// Content types
export const CONTENT_TYPES = {
  BLOG_POST: 'blog_post',
  CATEGORY: 'category',
  AUTHOR: 'author',
} as const;

// Helper function to get entries
export async function getEntries(contentType: string, query?: any) {
  try {
    const Query = Stack.ContentType(contentType).Query();

    if (query) {
      // Apply query parameters
      if (query.limit) Query.limit(query.limit);
      if (query.skip) Query.skip(query.skip);
      if (query.include_count) Query.includeCount();

      if (query.query) {
        // Handle specific query conditions
        const q = query.query;
        if (q.slug && q.$eq) {
          Query.where('slug', q.$eq);
        }
        if (q.category && q.$in) {
          Query.where('category', q.$in[0]); // For now, just use the first category
        }
      }
    }

    const result = await Query.toJSON().find();
    return result[0];
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}

// Helper function to get single entry
export async function getEntry(contentType: string, uid: string) {
  try {
    const entry = await Stack.ContentType(contentType).Entry(uid).toJSON().fetch();
    return entry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
}