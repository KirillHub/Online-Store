import { lazy, Suspense } from 'react';
import SuspenseLoader from './components/SuspenseLoader';

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const MainPage = Loader(lazy(() => import('./pages/Main/Main')));
const AdminPage = Loader(lazy(() => import('./pages/Admin')));

export const routes = [
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  }
];

// TODO: later update
export const links = {
  main: '/',
  admin: '/admin',
  basket: '/basket',
  device: '/device'
};
