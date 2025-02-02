import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogProps {
  blogs: BlogPost[];
}

export function Blog({ blogs }: BlogProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
              <span className="text-sm text-gray-500">{blog.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <a 
              href={blog.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
            >
              Read more <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}