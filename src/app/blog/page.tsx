import React from 'react';
import ArticleCard from '@/components/content/ArticleCard';
import { articles } from '@/data/mockData';

export default function BlogPage() {
  // Get featured article (first featured article from the list)
  const featuredArticle = articles.find(article => article.featured);
  // Get remaining articles (excluding the featured one)
  const remainingArticles = articles.filter(article => article !== featuredArticle);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog & Articles</h1>
      
      {/* Blog Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-full bg-primary-light text-white dark:bg-primary-dark">
            All Posts
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Software Development
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            AI & ML
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Music & Guitar
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            RuneScape
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Physics & Cosmology
          </button>
        </div>
      </div>
      
      {/* Blog Search */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-surface-dark dark:border-gray-700 dark:focus:ring-primary-dark dark:focus:border-primary-dark"
          />
          <div className="absolute left-3 top-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-12">
          <div className="card overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.imageAlt || featuredArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-sm text-primary-light dark:text-primary-dark mb-2">
                  {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} • {featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
                </div>
                <h2 className="text-2xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {featuredArticle.excerpt}
                </p>
                <a href={`/blog/${featuredArticle.slug}`} className="btn btn-primary">
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remainingArticles.map(article => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            &laquo; Previous
          </a>
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 bg-primary-light text-white dark:bg-primary-dark dark:border-primary-dark">
            1
          </a>
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            2
          </a>
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            3
          </a>
          <span className="px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            8
          </a>
          <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            Next &raquo;
          </a>
        </nav>
      </div>
    </div>
  );
}
