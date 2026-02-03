'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/40 via-transparent to-[#2C2C2C]/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#B8860B]/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/3 right-16 w-24 h-24 border border-[#B8860B]/20 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#B8860B]" />
            <span className="text-[#B8860B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Saffron Walden
            </span>
            <div className="w-16 h-px bg-[#B8860B]" />
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#FAF8F0] mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Italian Restaurant
          </h1>

          {/* Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10 text-[#FAF8F0]/80">
            <span className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Fresh Food
            </span>
            <span className="text-[#B8860B]">✦</span>
            <span className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Great Times
            </span>
            <span className="text-[#B8860B]">✦</span>
            <span className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Authentic Experience
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu" className="btn-secondary bg-transparent border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#2C2C2C]">
              View Menu
            </Link>
            <a
              href={siteConfig.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#FAF8F0]/60" />
      </div>
    </section>
  );
}
