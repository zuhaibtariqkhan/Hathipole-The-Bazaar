'use client';

import { mockBlogs } from '@/lib/data/mockBlogs';
import { Sparkles, Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#CDA45A] uppercase block">
          Heritage Journal & Stories
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1E1A18]">
          The Crafts of India Journal
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
          Deep dives into 400-year-old Pichwai art history, the anatomy of Changthangi cashmere, natural attar distillation in Varanasi, and styling handmade luxury in modern homes.
        </p>
      </div>

      {/* Featured Article */}
      <div className="bg-[#FCFAF7] border border-[#CDA45A]/30 rounded-3xl overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 aspect-[16/10] overflow-hidden">
          <img
            src={mockBlogs[0].imageUrl}
            alt={mockBlogs[0].title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="lg:col-span-6 p-8 lg:p-12 space-y-4">
          <span className="text-xs text-[#B56A45] font-bold uppercase tracking-wider">
            {mockBlogs[0].category} • {mockBlogs[0].readTime}
          </span>
          <h2 className="font-serif-luxury text-3xl font-bold text-[#1E1A18]">
            {mockBlogs[0].title}
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed font-light">
            {mockBlogs[0].excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#CDA45A]" /> {mockBlogs[0].author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#CDA45A]" /> {mockBlogs[0].date}</span>
          </div>
        </div>
      </div>

      {/* All Journal Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockBlogs.map((blog) => (
          <article key={blog.id} className="bg-[#FCFAF7] border border-[#CDA45A]/20 rounded-2xl overflow-hidden shadow-luxury flex flex-col justify-between hover:border-[#CDA45A] transition-all group">
            <div>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] text-[#B56A45] font-bold uppercase tracking-wider">
                  {blog.category} • {blog.readTime}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {blog.content}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between items-center text-xs text-gray-400 border-t border-[#CDA45A]/15 mt-4">
              <span>{blog.date}</span>
              <span className="text-[#CDA45A] font-semibold group-hover:underline flex items-center gap-1">
                Read Story <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
