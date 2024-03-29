import Layout from '@/layout';
import { Inter } from 'next/font/google';

import './globals.scss';
import './nullstyle.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <head />
      {/* <Layout.Header/> */}
      <body>{children}</body>
    </html>
  );
}
