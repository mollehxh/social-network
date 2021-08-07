import Messages from './Messages';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { RouteInterface } from './types';

export const publicRoutes: RouteInterface[] = [
  {
    path: '/sign-in',
    component: SignIn,
    exact: true,
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: true,
  },
];

export const privateRoutes: RouteInterface[] = [
  {
    path: '/messages',
    component: Messages,
    exact: true,
  },
];
