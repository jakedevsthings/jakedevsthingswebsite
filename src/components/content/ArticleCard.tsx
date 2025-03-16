"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  return (
    <div className={`card overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          {article.featured && (
            <span className="inline-block bg-secondary-light dark:bg-secondary-dark text-white text-xs font-medium px-2.5 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        
        <Image
          src={article.image}
          alt={article.imageAlt || article.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width={400}
          height={200}
        />
      </div>
      
      <div className="p-4 sm:p-5">
        <div className="flex items-center space-x-2 mb-2">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          
          {article.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">
          <Link 
            href={`/blog/${article.slug}`} 
            className="text-text-light dark:text-text-dark hover:text-secondary-light dark:hover:text-secondary-dark"
          >
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span className="mr-2">By {article.author}</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <Link 
            href={`/blog/${article.slug}`}
            className="text-secondary-light dark:text-secondary-dark hover:underline text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
