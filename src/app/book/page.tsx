import { Metadata } from 'next';
import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { BookingForm } from '@/components';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Book a Table | Trio Italian - Saffron Walden',
  description: 'Reserve your table at Trio Italian for an unforgettable Italian dining experience. Book online or via OpenTable.',
};

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#B8860B]" />
            <span
              className="text-[#B8860B] text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Reservations
            </span>
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>
          <h1
            className="text-5xl md:text-6xl text-[#FAF8F0] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Book a Table
          </h1>
          <p
            className="text-[#FAF8F0]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Reserve your spot for an unforgettable Italian dining experience. 
            Whether it&apos;s a romantic dinner, family gathering, or celebration with friends.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-[#FAF8F0] pattern-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* OpenTable Card */}
              <div className="bg-[#3D4F27] p-6 text-[#FAF8F0]">
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Instant Booking
                </h3>
                <p
                  className="text-[#FAF8F0]/80 text-sm mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  For instant confirmation, book directly through OpenTable
                </p>
                <a
                  href={siteConfig.openTableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Book on OpenTable
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-[#B8860B]" />
                  <h3
                    className="text-xl text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Opening Hours
                  </h3>
                </div>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                  {siteConfig.openingHours.map((schedule, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-[#2C2C2C]/70">{schedule.day}</span>
                      <span className="text-[#2C2C2C] font-medium">{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-[#B8860B]" />
                  <h3
                    className="text-xl text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Find Us
                  </h3>
                </div>
                <address
                  className="text-[#2C2C2C]/70 text-sm not-italic mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}<br />
                  {siteConfig.address.postcode}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3D4F27] text-sm hover:underline"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Get Directions →
                </a>
              </div>

              {/* Contact */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Phone size={20} className="text-[#B8860B]" />
                  <h3
                    className="text-xl text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Questions?
                  </h3>
                </div>
                <p
                  className="text-[#2C2C2C]/70 text-sm mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  For large parties or special events, please contact us directly.
                </p>
                <div className="space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block text-[#3D4F27] hover:underline"
                  >
                    📞 {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block text-[#3D4F27] hover:underline"
                  >
                    ✉️ {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-[#3D4F27]/10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p
            className="text-[#2C2C2C]/70 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <strong>Please note:</strong> Online booking requests will be confirmed within 24 hours. 
            For same-day reservations or large parties (10+), please call us directly. 
            A 10% discretionary service charge applies to tables of 5+ guests.
          </p>
        </div>
      </section>
    </>
  );
}
