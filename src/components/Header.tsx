'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/book', label: 'Book a Table' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2C2C2C]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#2C2C2C] py-5'
      }`}
    >
      {/* Top bar - Hidden on mobile */}
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-[#FAF8F0]/80 text-sm pb-3 border-b border-[#FAF8F0]/10">
            <div className="flex items-center gap-6">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-[#B8860B] transition-colors">
                <Phone size={14} />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[#B8860B] transition-colors">
                <Mail size={14} />
                <span>{siteConfig.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-[#FAF8F0]">
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-[#B8860B]">T</span>RIO
              </h1>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#FAF8F0]/60"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Italian
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FAF8F0]/90 hover:text-[#B8860B] transition-colors text-sm tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#FAF8F0] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#2C2C2C] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#FAF8F0] text-xl tracking-wider uppercase py-2 border-b border-[#FAF8F0]/10 animate-fade-in-up"
                style={{
                  fontFamily: 'var(--font-display)',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href={siteConfig.openTableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center"
              >
                Book on OpenTable
              </a>
              <div className="flex flex-col gap-2 text-[#FAF8F0]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
