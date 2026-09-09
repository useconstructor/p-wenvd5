import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luminary Flow',
  description: 'A premium, inclusive yoga studio website designed to drive first-class bookings, membership conversions, and instructor discovery across in-person and livestream offerings. The experience combines an editorial wellness aesthetic with an interactive schedule, pricing tiers, testimonials, and studio community storytelling.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F8F6F3', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
