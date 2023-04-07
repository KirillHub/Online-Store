'use client';

import './style.scss';

import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className='header'>
      <nav className='header-container'>
        <p className='header-p'>
          <Link href=''>Инет магазин</Link>
        </p>

        <ul className='header-container__ul'>
          <li>
            <Link href='/'>Главная</Link>
          </li>
          <li>
            <Link href={`/Category/Select-category`}>Категории</Link>
          </li>
          <li>
            <Link href='/Reviews'>Отзывы</Link>
          </li>
          <li>
            <Link href='/News'>Новости</Link>
          </li>
          <li>
            <Link href='/Contacts'>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/*
<header className='header'>
      <nav className='header-container'>
        <p className='header-p'>
          <Link href=''>Инет магазин</Link>
        </p>

        <ul className='header-container__ul'>
          <li>
            <Link href='/'>Главная</Link>
          </li>
          <li>
            <Link href={`/Category/Select-category`}>Категории</Link>
          </li>
          <li>
            <Link href='/Reviews'>Отзывы</Link>
          </li>
          <li>
            <Link href='/News'>Новости</Link>
          </li>
          <li>
            <Link href='/Contacts'>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
*/
