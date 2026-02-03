import { Metadata } from 'next';
import { Clock, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { ContactForm } from '@/components';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us | Trio Italian - Saffron Walden',
  description: 'Get in touch with Trio Italian. Contact us for reservations, private events, or any questions. Located in Saffron Walden.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Get in Touch
            </span>
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>
          <h1
            className="text-5xl md:text-6xl text-[#FAF8F0] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#FAF8F0]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We&apos;d love to hear from you. Whether you have a question about reservations, 
            private events, or anything else, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#FAF8F0] pattern-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#3D4F27] rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-[#FAF8F0]" />
                  </div>
                  <h3
                    className="text-lg text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Call Us
                  </h3>
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#3D4F27] text-xl font-medium hover:underline"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {siteConfig.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#B8860B] rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-[#FAF8F0]" />
                  </div>
                  <h3
                    className="text-lg text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Email Us
                  </h3>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#3D4F27] hover:underline"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#C4664A] rounded-full flex items-center justify-center">
                    <MapPin size={18} className="text-[#FAF8F0]" />
                  </div>
                  <h3
                    className="text-lg text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Visit Us
                  </h3>
                </div>
                <address
                  className="text-[#2C2C2C]/70 not-italic mb-3"
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

              {/* Opening Hours */}
              <div className="bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                    <Clock size={18} className="text-[#FAF8F0]" />
                  </div>
                  <h3
                    className="text-lg text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Opening Hours
                  </h3>
                </div>
                <ul className="space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
                  {siteConfig.openingHours.map((schedule, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-[#2C2C2C]/70">{schedule.day}</span>
                      <span className="text-[#2C2C2C]">{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              {siteConfig.socialLinks.instagram && (
                <div className="bg-[#3D4F27] p-6 text-center">
                  <h3
                    className="text-lg text-[#FAF8F0] mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Follow Us
                  </h3>
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#D4A84B] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <Instagram size={20} />
                    @trio_italian
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-[#2C2C2C]">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
            `Trio Italian, ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.postcode}`
          )}&zoom=16`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Trio Italian Location"
        />
      </section>
    </>
  );
}
