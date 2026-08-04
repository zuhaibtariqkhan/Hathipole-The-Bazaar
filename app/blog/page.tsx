'use client';

import { mockBlogs } from '@/lib/data/mockBlogs';
import { Sparkles, Clock, BookOpen, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#CDA45A] uppercase block font-semibold">
          Stories of Living Heritage
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-[#1E1A18] tracking-tight">
          The Heritage Journal
        </h1>
        <div className="w-16 h-0.5 bg-[#CDA45A] mx-auto" />
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
          Deep dives into 400-year-old Pichwai techniques, pure Pashmina cashmere anatomy, and interior styling with Indian handicrafts.
        </p>
      </div>

      {/* Journal Interactive Luxury Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockBlogs.map((blog) => (
          <div
            key={blog.id}
            id={blog.slug}
            className="luxury-card-interactive flex flex-col justify-between group h-full"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="badge-gold-foil px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1E1A18]">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#CDA45A]" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#CDA45A]" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18] group-hover:text-[#CDA45A] transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-light line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#CDA45A]/15 mt-4">
              <span className="text-xs font-bold text-[#CDA45A] uppercase tracking-wider flex items-center justify-between group-hover:text-[#1E1A18] transition-colors">
                Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
