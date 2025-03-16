"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });
  const [previewUrl, setPreviewUrl] = useState('');

  // Clean URL if it has query parameters
  useEffect(() => {
    // Check if URL has query parameters
    if (window.location.search) {
      // Replace current URL without query parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        if (data.previewUrl) {
          setPreviewUrl(data.previewUrl);
        }
        
        // Clean URL if it has query parameters
        if (window.location.search) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Something went wrong. Please try again later.' }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please check your network connection and try again.' }
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            {status.submitted ? (
              <div className="text-center py-6">
                <div className="text-green-600 dark:text-green-400 text-xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p className="mb-4">Your message has been sent successfully.</p>
                {previewUrl && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      This is a development preview of your email:
                    </p>
                    <a 
                      href={previewUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline"
                    >
                      View Email Preview
                    </a>
                  </div>
                )}
                <button
                  onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                  className="mt-4 px-6 py-2 bg-primary-light text-white rounded-md hover:bg-blue-600 dark:bg-primary-dark"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status.info.error && (
                  <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    <p>{status.info.msg}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-surface-dark dark:border-gray-700 dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-surface-dark dark:border-gray-700 dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-surface-dark dark:border-gray-700 dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                    placeholder="Message subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-light focus:border-primary-light dark:bg-surface-dark dark:border-gray-700 dark:focus:ring-primary-dark dark:focus:border-primary-dark"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: status.submitting ? 'rgb(156, 163, 175)' : 'rgb(59, 130, 246)',
                      color: 'white',
                      fontWeight: '500',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: status.submitting ? 'not-allowed' : 'pointer'
                    }}
                    onMouseOver={(e) => !status.submitting && (e.currentTarget.style.backgroundColor = 'rgb(37, 99, 235)')}
                    onMouseOut={(e) => !status.submitting && (e.currentTarget.style.backgroundColor = 'rgb(59, 130, 246)')}
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <div className="card p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-light dark:text-primary-dark mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a href="mailto:jakedevsthings@gmail.com" className="text-primary-light dark:text-primary-dark hover:underline">
                    jakedevsthings@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-light dark:text-primary-dark mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Plano, Texas, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/jakedevsthings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-md border border-gray-200 hover:border-primary-light hover:bg-gray-50 dark:border-gray-700 dark:hover:border-primary-dark dark:hover:bg-gray-800"
              >
                <div className="h-6 w-6 mr-3 text-gray-700 dark:text-gray-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <span>GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/jacob-siau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-md border border-gray-200 hover:border-primary-light hover:bg-gray-50 dark:border-gray-700 dark:hover:border-primary-dark dark:hover:bg-gray-800"
              >
                <div className="h-6 w-6 mr-3 text-gray-700 dark:text-gray-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://twitter.com/jakedevsthings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-md border border-gray-200 hover:border-primary-light hover:bg-gray-50 dark:border-gray-700 dark:hover:border-primary-dark dark:hover:bg-gray-800"
              >
                <div className="h-6 w-6 mr-3 text-gray-700 dark:text-gray-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span>Twitter</span>
              </a>
              
              <a
                href="https://instagram.com/thephysicsexplainer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-md border border-gray-200 hover:border-primary-light hover:bg-gray-50 dark:border-gray-700 dark:hover:border-primary-dark dark:hover:bg-gray-800"
              >
                <div className="h-6 w-6 mr-3 text-gray-700 dark:text-gray-300">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
