"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`card overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          {project.featured && (
            <span className="inline-block bg-primary-light dark:bg-primary-dark text-white text-xs font-medium px-2.5 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        
        <Image
          src={project.image}
          alt={project.imageAlt || project.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width={400}
          height={200}
        />
      </div>
      
      <div className="p-4 sm:p-5">
        <div className="flex items-center space-x-2 mb-2">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
          
          {project.tags.slice(0, 2).map((tag, index) => (
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
            href={`/projects/${project.slug}`} 
            className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
          >
            {project.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.shortDescription || project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(project.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </span>
          
          <div className="flex space-x-2">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark hover:underline text-sm font-medium"
                aria-label={`View live demo for ${project.title}`}
              >
                Demo
              </a>
            )}
            
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-light dark:text-primary-dark hover:underline text-sm font-medium"
                aria-label={`View source code for ${project.title}`}
              >
                Code
              </a>
            )}
            
            <Link 
              href={`/projects/${project.slug}`}
              className="text-primary-light dark:text-primary-dark hover:underline text-sm font-medium"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
