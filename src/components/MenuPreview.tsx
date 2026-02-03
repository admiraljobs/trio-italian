'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChefHat, Leaf, Wheat } from 'lucide-react';
import { menuData } from '@/lib/data';
import type { MenuItem } from '@/types';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  // Map button labels to menu category names
  const categoryMap: Record<string, string> = {
    'Starters': 'Starters',
    'Pasta': 'Pasta & Risotto',
    'Pizza': 'Homemade 12" Pizza',
    'Mains': 'Main Course',
    'Desserts': "Children's Menu", // Using children's menu as placeholder since no desserts category
  };

  const categories = ['Starters', 'Pasta', 'Pizza', 'Mains', 'Desserts'];

  // Get items for the active category (max 4 items)
  const getItemsForCategory = (categoryLabel: string): MenuItem[] => {
    const categoryName = categoryMap[categoryLabel];
    const category = menuData.find(c => c.name === categoryName);
    return category?.items.slice(0, 4) || [];
  };

  const currentItems = getItemsForCategory(activeCategory);

  const renderTags = (tags?: ('V' | 'VG' | 'GF')[]) => {
    if (!tags || tags.length === 0) return null;
    return (
      <div className="flex gap-1 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-[#3D4F27]/10 text-[#3D4F27] rounded"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {tag === 'V' && <Leaf size={10} />}
            {tag === 'VG' && <Leaf size={10} />}
            {tag === 'GF' && <Wheat size={10} />}
            {tag === 'V' && 'Vegetarian'}
            {tag === 'VG' && 'Vegan'}
            {tag === 'GF' && 'Gluten Free'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#2C2C2C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#B8860B]" />
            <ChefHat size={24} className="text-[#B8860B]" />
            <div className="w-12 h-px bg-[#B8860B]" />
          </div>

          <h2
            className="text-4xl md:text-5xl text-[#FAF8F0] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Menu
          </h2>

          <p
            className="text-[#FAF8F0]/70 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A curated selection of classic Italian dishes, each prepared with an emphasis 
            on authenticity and flavor.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#B8860B] text-[#FAF8F0] border border-[#B8860B]'
                  : 'text-[#FAF8F0]/60 border border-[#FAF8F0]/20 hover:border-[#B8860B] hover:text-[#B8860B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentItems.map((item, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="menu-card bg-[#FAF8F0]/5 backdrop-blur-sm p-6 border border-[#FAF8F0]/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3
                  className="text-xl text-[#FAF8F0]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.name}
                </h3>
                <span
                  className="text-[#B8860B] font-semibold"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  £{item.price.toFixed(2)}
                </span>
              </div>
              <p
                className="text-[#FAF8F0]/60 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.description}
              </p>
              {item.tags && renderTags(item.tags)}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="btn-secondary border-[#FAF8F0] text-[#FAF8F0] hover:bg-[#FAF8F0] hover:text-[#2C2C2C]"
          >
            View Full Menu
          </Link>
        </div>

        {/* Dietary Note */}
        <p
          className="text-center text-[#FAF8F0]/50 text-sm mt-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          If you have any allergies or dietary needs, please speak to a member of staff before ordering.
          <br />
          Gluten-free pasta and vegan cheese available on request.
        </p>
      </div>
    </section>
  );
}
