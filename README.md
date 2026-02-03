# Trio Italian Restaurant Website

A modern, elegant restaurant website built with Next.js 15, TypeScript, and Tailwind CSS for Trio Italian restaurant in Saffron Walden.

## Features

- 🍝 **Full Menu Display** - Interactive accordion-style menu with dietary indicators (V, VG, GF)
- 📅 **Online Booking System** - Custom booking form with email notifications via Resend
- 📧 **Contact Form** - Integrated contact form with automatic confirmations
- 🔔 **Announcement Banner** - Dismissible banner for special announcements and promotions
- 🔗 **OpenTable Integration** - Direct link to OpenTable for instant bookings
- 📱 **Fully Responsive** - Beautiful on all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🎨 **Custom Design** - Elegant Italian-inspired design with Cormorant Garamond and Outfit fonts

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Email**: Resend
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trio-italian
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── booking/     # Booking form API endpoint
│   │   └── contact/     # Contact form API endpoint
│   ├── about/           # About page
│   ├── book/            # Booking page
│   ├── contact/         # Contact page
│   ├── menu/            # Menu page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── AboutSection.tsx
│   ├── AnnouncementBanner.tsx
│   ├── BookingCTA.tsx
│   ├── BookingForm.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MenuDisplay.tsx
│   ├── MenuPreview.tsx
│   └── ReviewsSection.tsx
├── lib/
│   └── data.ts          # Site configuration and menu data
└── types/
    └── index.ts         # TypeScript type definitions
```

## Configuration

### Announcement Banner

Edit the `defaultAnnouncement` in `src/lib/data.ts` to change the announcement:

```typescript
export const defaultAnnouncement: Announcement = {
  id: '1',
  title: 'Your Title',
  message: 'Your message here',
  link: {
    text: 'Link Text',
    url: 'https://example.com',
  },
  backgroundColor: '#C4664A',
  textColor: '#FFFDF7',
  isActive: true, // Set to false to hide
};
```

### Menu Data

All menu items are stored in `src/lib/data.ts` in the `menuData` array. Each category follows this structure:

```typescript
{
  name: 'Category Name',
  subtitle: 'Optional subtitle',
  items: [
    {
      name: 'Item Name',
      description: 'Item description',
      price: 15.95,
      tags: ['V', 'GF'], // V = Vegetarian, VG = Vegan, GF = Gluten Free
    },
  ],
}
```

### Site Configuration

Update `siteConfig` in `src/lib/data.ts` for:
- Restaurant name and description
- Address
- Phone number
- Email
- Opening hours
- Social media links
- OpenTable URL

## Email Setup with Resend

1. Create an account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. (Optional) Verify your domain to send from your own email address
4. Add the API key to your `.env.local` file

Note: Until you verify a domain, emails will be sent from Resend's test domain.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## License

This project is proprietary software for Trio Italian restaurant.

## Contact

For questions about this website, contact info@trioitalian.co.uk
