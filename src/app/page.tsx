import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="section flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">jakedevsthings</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          SWE • AI Enthusiast • Musician • Gamer • Physics Geek
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="/contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added here */}
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="mb-4">Software Engineering project description goes here...</p>
              <a href="/projects/1" className="text-primary-light dark:text-primary-dark font-medium hover:underline">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="mb-4">AI project description goes here...</p>
              <a href="/projects/2" className="text-primary-light dark:text-primary-dark font-medium hover:underline">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="mb-4">Physics/Cosmology project description goes here...</p>
              <a href="/projects/3" className="text-primary-light dark:text-primary-dark font-medium hover:underline">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-surface-light dark:bg-surface-dark">
        <div className="container">
          <h2 className="section-title text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Skill categories will be added here */}
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">Software Development</h3>
              <ul className="list-disc pl-5">
                <li>Python, Java, C++</li>
                <li>DevOps & CI/CD</li>
                <li>API Platform Engineering</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">AI & ML</h3>
              <ul className="list-disc pl-5">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">Music & Creative</h3>
              <ul className="list-disc pl-5">
                <li>Guitar</li>
                <li>Social Media</li>
                <li>Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="section">
        <h2 className="section-title text-center">Latest Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content cards will be added here */}
          <div className="card">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700">
              {/* YouTube embed placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span>YouTube Embed</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Latest Guitar Cover</h3>
              <p className="mb-4">Check out my latest guitar performance...</p>
            </div>
          </div>
          <div className="card">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700">
              {/* RuneScape content placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span>RuneScape Content</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">RuneScape Adventure</h3>
              <p className="mb-4">Join me on this epic RuneScape journey...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section bg-primary-light dark:bg-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you!
          </p>
          <a href="/contact" className="btn bg-white text-primary-light hover:bg-opacity-90 dark:text-primary-dark">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
