import { Test } from 'pages/test';
import { Route } from './types';

export const privateRoutes: Route[] = [
  {
    path: '/profile',
    component: Test,
    exact: true,
  },
  {
    path: '/feed',
    component: Test,
    exact: true,
  },
  {
    path: '/messages',
    component: Test,
    exact: true,
  },
  {
    path: '/friends',
    component: Test,
    exact: true,
  },
];
export const publicRoutes: Route[] = [
  {
    path: '/sign-in',
    component: Test,
    exact: true,
  },
  {
    path: '/sign-up',
    component: Test,
    exact: true,
  },
];
