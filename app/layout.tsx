// app/layout.tsx
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google'; // Import Roboto
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Initialize Roboto font with desired subsets and weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});

export const metadata: Metadata = {
  title: 'Zobelab - Empowering Music Talents',
  description: 'Tools, services and connections to join the music revolution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}