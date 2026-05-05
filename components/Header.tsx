import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'NexBlog' }: HeaderProps) {
  return (
    <header className="glass sticky top-0 z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
            {title}
          </Link>
          <ul className="flex items-center space-x-8 text-sm font-medium text-slate-200">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                Authors
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
