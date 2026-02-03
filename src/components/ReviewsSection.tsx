'use client';

import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#FAF8F0] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pattern-bg opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#3D4F27]/5 rounded-full translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#B8860B]/5 rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#B8860B]" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#B8860B] fill-[#B8860B]" />
              ))}
            </div>
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>

          <h2
            className="text-4xl md:text-5xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Our Guests Say
          </h2>

          <p
            className="text-[#2C2C2C]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Don&apos;t just take our word for it
          </p>
        </div>

        {/* Reviews */}
        <div className="max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-white p-8 md:p-12 shadow-xl"
            >
              {/* Quote Icon */}
              <Quote
                size={64}
                className="absolute top-4 left-4 text-[#B8860B]/10"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#B8860B] fill-[#B8860B]"
                  />
                ))}
              </div>

              {/* Review Content */}
              <blockquote
                className="text-lg md:text-xl text-[#2C2C2C]/80 leading-relaxed mb-8 relative z-10"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                &ldquo;{review.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#3D4F27] rounded-full flex items-center justify-center">
                  <span
                    className="text-[#FAF8F0] text-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {review.author[0]}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[#2C2C2C] font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {review.author}
                  </p>
                  <p
                    className="text-[#2C2C2C]/50 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Verified Guest
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#B8860B]" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p
            className="text-[#2C2C2C]/60 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Experience it for yourself
          </p>
          <p
            className="text-[#3D4F27] text-2xl mt-2"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            &ldquo;I&apos;ll be back to try more!&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
