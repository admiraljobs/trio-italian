import { Metadata } from 'next';
import Link from 'next/link';
import { Quote, Heart, Users, Utensils } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us | Trio Italian - Saffron Walden',
  description: 'Learn about Trio Italian, founded by Arin, Anna, and Kaan. We believe dining is more than just a meal—it\'s an experience that brings people together.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Our Story
            </span>
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>
          <h1
            className="text-5xl md:text-6xl text-[#FAF8F0] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About Trio
          </h1>
          <p
            className="text-[#FAF8F0]/70 max-w-2xl mx-auto text-lg italic"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            &quot;Dining is more than a meal — it&apos;s an experience&quot;
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-[#FAF8F0] pattern-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Italian restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#B8860B] hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#3D4F27]/10 hidden lg:block" />
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-4xl text-[#2C2C2C] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Welcome to <span className="text-[#3D4F27]">TRIO</span>
              </h2>

              <p
                className="text-[#2C2C2C]/80 leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                At our restaurant, we believe that dining is more than just a meal—it&apos;s an 
                experience that brings people together. Our ethos is built on the foundation 
                of family, community, and shared moments.
              </p>

              <p
                className="text-[#2C2C2C]/80 leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We understand that family doesn&apos;t have to be defined by blood; it includes 
                friends, partners, and anyone with whom we share a special bond.
              </p>

              <p
                className="text-[#2C2C2C]/80 leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We are committed to creating a warm and inviting atmosphere where everyone 
                feels welcome. Our menu is crafted with love and care, featuring dishes that 
                reflect our passion for fresh, high-quality ingredients and authentic flavors.
              </p>

              {/* Quote */}
              <div className="bg-white p-6 shadow-lg relative">
                <Quote size={32} className="text-[#B8860B] absolute -top-4 -left-2" />
                <p
                  className="text-[#3D4F27] text-xl italic pl-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Each plate served is a testament to our dedication to culinary excellence 
                  and our desire to bring joy to every table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#3D4F27]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#FAF8F0] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Values
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B]/20 rounded-full mb-6">
                <Heart size={32} className="text-[#B8860B]" />
              </div>
              <h3
                className="text-2xl text-[#FAF8F0] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Passion
              </h3>
              <p
                className="text-[#FAF8F0]/70"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Every dish is prepared with genuine love and care, reflecting our deep 
                passion for authentic Italian cuisine.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B]/20 rounded-full mb-6">
                <Users size={32} className="text-[#B8860B]" />
              </div>
              <h3
                className="text-2xl text-[#FAF8F0] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Community
              </h3>
              <p
                className="text-[#FAF8F0]/70"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                We celebrate the magic of coming together, where connections are made 
                and stories are shared over great food.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B]/20 rounded-full mb-6">
                <Utensils size={32} className="text-[#B8860B]" />
              </div>
              <h3
                className="text-2xl text-[#FAF8F0] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Quality
              </h3>
              <p
                className="text-[#FAF8F0]/70"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Fresh, high-quality ingredients are at the heart of everything we create, 
                ensuring every bite transports you to Italy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#FAF8F0]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet the Team
          </h2>
          <p
            className="text-[#2C2C2C]/70 mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The heart and soul behind Trio Italian
          </p>

          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#3D4F27] rounded-full flex items-center justify-center">
                <span className="text-[#FAF8F0] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>A</span>
              </div>
              <div className="w-16 h-16 bg-[#B8860B] rounded-full flex items-center justify-center">
                <span className="text-[#FAF8F0] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>A</span>
              </div>
              <div className="w-16 h-16 bg-[#C4664A] rounded-full flex items-center justify-center">
                <span className="text-[#FAF8F0] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>K</span>
              </div>
            </div>
            
            <h3
              className="text-3xl text-[#2C2C2C] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Arin, Anna & Kaan
            </h3>
            
            <p
              className="text-[#2C2C2C]/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Arin, Anna, and Kaan warmly welcome you to TRIO. Together, they bring their 
              shared passion for Italian cuisine and hospitality to create an unforgettable 
              dining experience in Saffron Walden. Their dedication to quality, authenticity, 
              and creating meaningful connections with guests is what makes Trio special.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl text-[#FAF8F0] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experience Trio
          </h2>
          <p
            className="text-[#FAF8F0]/70 mb-8 max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join us for an authentic Italian dining experience that brings people together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="btn-gold"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="btn-secondary border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#2C2C2C]"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
