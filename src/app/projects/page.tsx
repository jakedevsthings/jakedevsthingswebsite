import React from 'react';
import ProjectCard from '@/components/content/ProjectCard';
import { projects } from '@/data/mockData';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Projects Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-full bg-primary-light text-white dark:bg-primary-dark">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Software Engineering
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            AI & Machine Learning
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Music
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Gaming
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-primary-dark">
            Physics & Cosmology
          </button>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
