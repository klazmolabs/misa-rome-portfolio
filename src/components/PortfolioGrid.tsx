'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  className?: string;
}

const PortfolioGrid = ({ items, className = '' }: PortfolioGridProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group relative aspect-video overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end justify-start p-8">
            <div
              className={`transition-all duration-500 ${
                hoveredItem === item.id
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-2 opacity-90'
              }`}
            >
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-2 font-medium">
                {item.category}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;
