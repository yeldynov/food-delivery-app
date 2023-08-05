import Notification from '@/components/Notification';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MASSIMO Italian Pizza',
  description:
    'MASSIMO Italian Pizza is the best italian pizza has ever been seen in the city of Kharkiv. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Notification />
        <Navbar />
        <div className={inter.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
