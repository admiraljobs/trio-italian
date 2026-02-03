import { Metadata } from 'next';
import Link from 'next/link';
import { MenuDisplay } from '@/components';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Menu | Trio Italian - Saffron Walden',
  description: 'Explore our authentic Italian menu featuring homemade pasta, wood-fired pizzas, fresh seafood, and more. Gluten-free and vegan options available.',
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#2C2C2C]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Authentic Italian Cuisine
            </span>
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>
          <h1
            className="text-5xl md:text-6xl text-[#FAF8F0] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Menu
          </h1>
          <p
            className="text-[#FAF8F0]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A curated selection of classic Italian dishes, each prepared with an emphasis 
            on authenticity and flavor. From hand-tossed pizzas to fresh homemade pasta.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-[#FAF8F0] pattern-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <MenuDisplay />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3D4F27]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl text-[#FAF8F0] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Dine?
          </h2>
          <p
            className="text-[#FAF8F0]/70 mb-8 max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Book your table now and experience authentic Italian cuisine in the heart of Saffron Walden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              className="btn-secondary border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#3D4F27]"
            >
              Book via OpenTable
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
