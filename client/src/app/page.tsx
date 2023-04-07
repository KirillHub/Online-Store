import Image from 'next/image';
import { Inter } from 'next/font/google';
import Main from '@/pages/Main/Main';

export default function MainPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Main />
    </main>
  );
}
