"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background-light dark:bg-background-dark sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
              jakedevsthings
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>

          {/* Theme Toggle Button */}
          <div className="ml-4 hidden md:block">
            <ThemeToggle className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Controlled by state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/projects">Projects</MobileNavLink>
          <MobileNavLink href="/blog">Blog</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
          <div className="pt-2 pl-3">
            <ThemeToggle className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-primary-light dark:text-gray-300 dark:hover:text-primary-dark font-medium"
    >
      {children}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  );
}
