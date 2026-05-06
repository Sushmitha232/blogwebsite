import Contentstack from 'contentstack';
import { SAMPLE_DESTINATIONS } from './sampleData';

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  region: process.env.CONTENTSTACK_REGION === 'EU' ? Contentstack.Region.EU : Contentstack.Region.US,
});

export default Stack;

// Content types
export const CONTENT_TYPES = {
  DESTINATION: 'destination',
  ATTRACTION: 'attraction',
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
        if (q.slug && q.slug.$eq) {
          Query.where('slug', q.slug.$eq);
        }
        if (q.category && q.$in) {
          Query.where('category', q.$in[0]); // For now, just use the first category
        }
      }
    }

    const result = await Query.toJSON().find();
    return result[0] || [];
  } catch (error) {
    console.warn('Contentstack API error, using sample data:', error);
    // Fallback to sample data when CMS is unavailable
    if (contentType === CONTENT_TYPES.DESTINATION) {
      // Apply same filtering to sample data
      let filtered = [...SAMPLE_DESTINATIONS];
      
      if (query?.query?.slug?.$eq) {
        filtered = filtered.filter((d: any) => d.slug === query.query.slug.$eq);
      }
      
      if (query?.limit) {
        filtered = filtered.slice(0, query.limit);
      }
      
      return filtered;
    }
    return [];
  }
}

// Helper function to get single entry
export async function getEntry(contentType: string, uid: string) {
  try {
    const entry = await Stack.ContentType(contentType).Entry(uid).toJSON().fetch();
    return entry;
  } catch (error) {
    console.warn('Error fetching entry, checking sample data:', error);
    // Check if it's in sample data
    if (contentType === CONTENT_TYPES.DESTINATION) {
      const found = SAMPLE_DESTINATIONS.find((d: any) => d.slug === uid || d.uid === uid);
      return found || null;
    }
    return null;
  }
}