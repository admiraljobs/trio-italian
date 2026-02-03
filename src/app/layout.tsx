import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer, AnnouncementBanner } from '@/components';
import { defaultAnnouncement } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Trio Italian | Authentic Italian Restaurant in Saffron Walden',
  description: 'Welcome to TRIO, the newest Italian dining spot in the heart of Saffron Walden. Authentic Italian cuisine, fresh food, great times, and unforgettable dining experiences.',
  keywords: 'Italian restaurant, Saffron Walden, pizza, pasta, authentic Italian food, Italian dining',
  authors: [{ name: 'Trio Italian' }],
  openGraph: {
    title: 'Trio Italian | Authentic Italian Restaurant in Saffron Walden',
    description: 'Welcome to TRIO, the newest Italian dining spot in the heart of Saffron Walden. Fresh Food • Great Times • Authentic Experience',
    url: 'https://www.trioitalian.co.uk',
    siteName: 'Trio Italian',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trio Italian | Authentic Italian Restaurant in Saffron Walden',
    description: 'Welcome to TRIO, the newest Italian dining spot in the heart of Saffron Walden.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FAF8F0] text-[#2C2C2C]">
        <Header />
        <AnnouncementBanner announcement={defaultAnnouncement} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
