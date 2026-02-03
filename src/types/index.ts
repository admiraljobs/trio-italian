// Menu Types
export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tags?: ('V' | 'VG' | 'GF')[];
}

export interface MenuCategory {
  name: string;
  subtitle?: string;
  items: MenuItem[];
}

// Form Types
export interface BookingFormData {
  fullName: string;
  email: string;
  telephone: string;
  numberOfGuests: number;
  preferredDate: string;
  preferredTime: string;
  specialOccasion: string;
  additionalNotes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Site Configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  phone: string;
  email: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
  openTableUrl: string;
}

// Announcement
export interface Announcement {
  id: string;
  title: string;
  message: string;
  link?: {
    text: string;
    url: string;
  };
  backgroundColor?: string;
  textColor?: string;
  isActive: boolean;
}

// Review
export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
}
