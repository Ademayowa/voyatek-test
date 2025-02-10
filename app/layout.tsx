import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'HooBank | Home',
  description: 'The next generation payment method',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
