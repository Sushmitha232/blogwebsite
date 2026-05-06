// Contentstack content types for Travel Guide

export interface Destination {
  uid: string;
  title: string;
  description: string;
  location: string;
  country: string;
  best_time_to_visit: string;
  slug: string;
  published_at: string;
  updated_at: string;
  featured_image?: {
    url: string;
    title: string;
  };
  gallery_images?: Array<{
    url: string;
    title: string;
  }>;
  attractions?: string;
  accommodation_tips?: string;
  travel_tips?: string;
  estimated_days?: number;
  budget?: string;
  category?: Category;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Attraction {
  uid: string;
  name: string;
  description: string;
  location: string;
  type: string; // museum, park, landmark, etc
  featured_image?: {
    url: string;
    title: string;
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
export interface DestinationQuery {
  limit?: number;
  skip?: number;
  include_count?: boolean;
  query?: {
    [key: string]: any;
  };
}