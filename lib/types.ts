// Contentstack content types
export interface BlogPost {
  uid: string;
  title: string;
  description: string;
  body: string;
  slug: string;
  published_at: string;
  updated_at: string;
  tags?: string[];
  featured_image?: {
    url: string;
    title: string;
  };
  author?: Author;
  category?: Category;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Author {
  uid: string;
  name: string;
  bio?: string;
  avatar?: {
    url: string;
    title: string;
  };
  social_links?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  uid: string;
  title: string;
  description?: string;
  slug: string;
}

// API Response types
export interface ContentstackResponse<T> {
  entries: T[];
  total: number;
}

export interface SingleEntryResponse<T> {
  entry: T;
}

// Query parameters
export interface BlogPostQuery {
  limit?: number;
  skip?: number;
  include_count?: boolean;
  query?: {
    [key: string]: any;
  };
}