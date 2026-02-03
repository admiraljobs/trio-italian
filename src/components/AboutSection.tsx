'use client';

import Link from 'next/link';
import { Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#FAF8F0] pattern-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3D4F27]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Italian dining"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Fresh pasta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Wood-fired pizza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Cocktails"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#B8860B] hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#B8860B] hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#B8860B]" />
              <span
                className="text-[#3D4F27] text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl text-[#2C2C2C] mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Welcome to{' '}
              <span className="text-[#3D4F27]">Trio</span>
            </h2>

            <p
              className="text-[#2C2C2C]/80 text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Welcome to TRIO, the newest Italian dining spot in the heart of Saffron Walden. 
              At TRIO, we pride ourselves on delivering an authentic and vibrant atmosphere, 
              coupled with delicious cuisine and exceptional service.
            </p>

            <p
              className="text-[#2C2C2C]/70 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We believe that dining is more than just a meal—it&apos;s an experience that brings 
              people together. Our ethos is built on the foundation of family, community, and 
              shared moments. Whether you&apos;re a local or just visiting, TRIO promises an 
              unforgettable Italian dining experience.
            </p>

            {/* Quote */}
            <div className="bg-[#3D4F27]/5 p-6 mb-8 relative">
              <Quote size={32} className="text-[#B8860B] absolute -top-4 -left-2" />
              <p
                className="text-[#3D4F27] text-xl italic pl-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                &ldquo;Dining is more than a meal — it&apos;s an experience&rdquo;
              </p>
              <p
                className="text-[#2C2C2C]/60 text-sm mt-2 pl-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — Arin, Anna & Kaan
              </p>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
