import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pizza Express | A Slice Above the Ordinary',
  description: 'Pizza Express, Kalampur Bazar, Dhamrai, Dhaka. Discover pizza, pasta and more.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
