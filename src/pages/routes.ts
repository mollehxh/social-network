import SignIn from './signIn';
import SignUp from './signUp';
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
