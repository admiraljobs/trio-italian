import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] text-[#FAF8F0]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h2
                className="text-4xl tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-[#B8860B]">T</span>RIO
              </h2>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#FAF8F0]/60"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Italian
              </p>
            </Link>
            <p
              className="text-[#FAF8F0]/70 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Authentic Italian dining experience in the heart of Saffron Walden. 
              Fresh food, great times, unforgettable memories.
            </p>
            {siteConfig.socialLinks.instagram && (
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FAF8F0]/70 hover:text-[#B8860B] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Instagram size={20} />
                <span className="text-sm">Follow us on Instagram</span>
              </a>
            )}
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              className="text-lg mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Clock size={18} className="text-[#B8860B]" />
              Opening Hours
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              {siteConfig.openingHours.map((schedule, index) => (
                <li key={index} className="text-sm text-[#FAF8F0]/70 flex justify-between">
                  <span>{schedule.day}</span>
                  <span className="text-[#FAF8F0]/90">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#FAF8F0]/70 hover:text-[#B8860B] transition-colors"
                >
                  <MapPin size={18} className="text-[#B8860B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}<br />
                    {siteConfig.address.postcode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-[#FAF8F0]/70 hover:text-[#B8860B] transition-colors"
                >
                  <Phone size={18} className="text-[#B8860B]" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[#FAF8F0]/70 hover:text-[#B8860B] transition-colors"
                >
                  <Mail size={18} className="text-[#B8860B]" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/book', label: 'Book a Table' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF8F0]/70 hover:text-[#B8860B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.openTableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#B8860B] hover:text-[#D4A84B] transition-colors font-medium"
                >
                  Book on OpenTable →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF8F0]/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FAF8F0]/50" style={{ fontFamily: 'var(--font-body)' }}>
            <p>© {currentYear} Trio Italian. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-[#FAF8F0] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-[#FAF8F0] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund" className="hover:text-[#FAF8F0] transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
