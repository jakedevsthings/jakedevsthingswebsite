// Common type definitions for the portfolio website

// Project types
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  imageAlt?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type ProjectCategory = 
  | 'software' 
  | 'ai' 
  | 'music' 
  | 'gaming' 
  | 'physics' 
  | 'other';

// Article/Blog types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  tags: string[];
  image: string;
  imageAlt?: string;
  author: string;
  featured: boolean;
  publishedAt: string;
  updatedAt?: string;
}

export type ArticleCategory = 
  | 'software' 
  | 'ai' 
  | 'music' 
  | 'gaming' 
  | 'physics' 
  | 'tutorial' 
  | 'opinion' 
  | 'other';

// Media types
export interface Media {
  id: string;
  type: 'youtube' | 'instagram' | 'tiktok' | 'image' | 'other';
  sourceId?: string;
  url: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  category: MediaCategory;
  createdAt: string;
}

export type MediaCategory = 
  | 'music' 
  | 'tutorial' 
  | 'gaming' 
  | 'science' 
  | 'coding' 
  | 'other';

// Component prop types
export interface ThemeToggleProps {
  className?: string;
}

export interface MediaEmbedProps {
  type: 'youtube' | 'instagram' | 'tiktok';
  id: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16';
  className?: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
