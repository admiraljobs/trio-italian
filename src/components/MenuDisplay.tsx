'use client';

import { useState } from 'react';
import { Leaf, Wheat, ChevronDown } from 'lucide-react';
import { menuData } from '@/lib/data';
import type { MenuCategory, MenuItem } from '@/types';

export default function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const renderTags = (tags?: ('V' | 'VG' | 'GF')[]) => {
    if (!tags || tags.length === 0) return null;
    return (
      <div className="flex gap-1 mt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-[#3D4F27]/10 text-[#3D4F27] rounded"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {tag === 'V' && <Leaf size={10} />}
            {tag === 'VG' && <Leaf size={10} />}
            {tag === 'GF' && <Wheat size={10} />}
            {tag === 'V' && 'V'}
            {tag === 'VG' && 'VG'}
            {tag === 'GF' && 'GF'}
          </span>
        ))}
      </div>
    );
  };

  const renderMenuItem = (item: MenuItem, index: number) => (
    <div
      key={index}
      className="group py-4 border-b border-[#2C2C2C]/10 last:border-0"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className="text-lg text-[#2C2C2C] group-hover:text-[#3D4F27] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.name}
            </h4>
            {item.tags && renderTags(item.tags)}
          </div>
          <p
            className="text-[#2C2C2C]/60 text-sm mt-1 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {item.description}
          </p>
        </div>
        {item.price > 0 && (
          <span
            className="text-[#3D4F27] font-semibold whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            £{item.price.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );

  const renderCategory = (category: MenuCategory, index: number) => {
    const isActive = activeCategory === category.name;

    return (
      <div
        key={index}
        className="bg-white shadow-sm mb-4 overflow-hidden"
      >
        <button
          onClick={() => setActiveCategory(isActive ? null : category.name)}
          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAF8F0]/50 transition-colors"
        >
          <div>
            <h3
              className="text-2xl text-[#2C2C2C]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {category.name}
            </h3>
            {category.subtitle && (
              <p
                className="text-[#3D4F27] text-sm mt-1 italic"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category.subtitle}
              </p>
            )}
          </div>
          <ChevronDown
            size={24}
            className={`text-[#3D4F27] transition-transform ${isActive ? 'rotate-180' : ''}`}
          />
        </button>
        
        <div
          className={`transition-all duration-300 ${
            isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            {category.items.map((item, itemIndex) => renderMenuItem(item, itemIndex))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-[#3D4F27]/10 text-[#3D4F27] rounded">
            <Leaf size={12} />
            V
          </span>
          <span className="text-sm text-[#2C2C2C]/60" style={{ fontFamily: 'var(--font-body)' }}>
            Vegetarian
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-[#3D4F27]/10 text-[#3D4F27] rounded">
            <Leaf size={12} />
            VG
          </span>
          <span className="text-sm text-[#2C2C2C]/60" style={{ fontFamily: 'var(--font-body)' }}>
            Vegan
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-[#3D4F27]/10 text-[#3D4F27] rounded">
            <Wheat size={12} />
            GF
          </span>
          <span className="text-sm text-[#2C2C2C]/60" style={{ fontFamily: 'var(--font-body)' }}>
            Gluten Free
          </span>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-4">
        {menuData.map((category, index) => renderCategory(category, index))}
      </div>

      {/* Dietary Note */}
      <div className="mt-12 text-center bg-[#3D4F27]/5 p-6">
        <p
          className="text-[#2C2C2C]/70 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          If you have any allergies or dietary needs, please speak to a member of staff before ordering.
          <br />
          <span className="text-[#3D4F27]">Gluten-free pasta and vegan cheese available on request.</span>
        </p>
        <p
          className="text-[#2C2C2C]/50 text-xs mt-4"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A 10% discretionary service charge applies to tables of 5+ guests.
        </p>
      </div>
    </div>
  );
}
