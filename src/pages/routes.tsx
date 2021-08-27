import { AuthPage } from './auth-page';
import { DialogsPage } from './dialogs-page';

export type RouteConfig = {
  path: string;
  component: () => JSX.Element;
  exact: boolean;
};

export const publicRoutes: RouteConfig[] = [
  {
    component: AuthPage,
    path: '/auth',
    exact: true,
  },
];
export const privateRoutes: RouteConfig[] = [
  {
    component: DialogsPage,
    path: '/dialogs',
    exact: true,
  },
];
