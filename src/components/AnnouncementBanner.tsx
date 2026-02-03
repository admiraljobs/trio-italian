'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Announcement } from '@/types';

interface AnnouncementBannerProps {
  announcement: Announcement | null;
}

export default function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!announcement || !announcement.isActive || !isVisible) {
    return null;
  }

  return (
    <div
      className="relative overflow-hidden animate-slide-down"
      style={{
        backgroundColor: announcement.backgroundColor || '#C4664A',
        color: announcement.textColor || '#FFFDF7',
      }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-4 text-center">
          <Sparkles size={18} className="hidden sm:block flex-shrink-0 animate-pulse" />
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
            {announcement.title && (
              <span className="font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {announcement.title}
              </span>
            )}
            <span style={{ fontFamily: 'var(--font-body)' }}>
              {announcement.message}
            </span>
            {announcement.link && (
              <a
                href={announcement.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {announcement.link.text} →
              </a>
            )}
          </div>
          
          <Sparkles size={18} className="hidden sm:block flex-shrink-0 animate-pulse" />
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
            aria-label="Close announcement"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
