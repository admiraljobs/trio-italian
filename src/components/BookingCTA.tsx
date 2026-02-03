'use client';

import Link from 'next/link';
import { Calendar, Gift } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function BookingCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#2C2C2C]/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book a Table */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#B8860B]/20 px-4 py-2 rounded-full mb-6">
              <Calendar size={18} className="text-[#B8860B]" />
              <span
                className="text-[#B8860B] text-sm tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Reservations
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl text-[#FAF8F0] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Book Your Table
            </h2>

            <p
              className="text-[#FAF8F0]/80 mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Whether it&apos;s a romantic dinner, family gathering, or celebration with friends, 
              we&apos;d love to welcome you to Trio. Reserve your table today for an unforgettable 
              Italian dining experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/book"
                className="btn-gold"
              >
                Book Online
              </Link>
              <a
                href={siteConfig.openTableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#2C2C2C]"
              >
                Book via OpenTable
              </a>
            </div>

            <p
              className="text-[#FAF8F0]/60 text-sm mt-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Or call us directly: <a href={`tel:${siteConfig.phone}`} className="text-[#B8860B] hover:underline">{siteConfig.phone}</a>
            </p>
          </div>

          {/* Gift Cards */}
          <div className="bg-[#FAF8F0]/10 backdrop-blur-sm p-8 md:p-12 border border-[#FAF8F0]/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B]/20 rounded-full mb-6">
              <Gift size={32} className="text-[#B8860B]" />
            </div>

            <h3
              className="text-3xl text-[#FAF8F0] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Gift Cards Available
            </h3>

            <p
              className="text-[#FAF8F0]/70 mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The perfect gift for birthdays, anniversaries, Mother&apos;s Day, 
              or any special occasion. Available in-store.
            </p>

            <Link
              href="/contact"
              className="btn-secondary border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#2C2C2C] inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-32 h-32 border border-[#B8860B]/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#B8860B]/20 rounded-full hidden lg:block" />
    </section>
  );
}
