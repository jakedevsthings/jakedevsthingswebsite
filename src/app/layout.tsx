import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Jake Devs Things - Portfolio',
  description: 'Personal portfolio showcasing software engineering, AI, music, gaming, and physics/cosmology content',
  keywords: ['software engineering', 'AI', 'guitar', 'music', 'RuneScape', 'gaming', 'physics', 'cosmology', 'portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background-light text-textColor-light dark:bg-background-dark dark:text-textColor-dark">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
