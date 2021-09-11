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
    exact: false,
  },
];
export const privateRoutes: RouteConfig[] = [
  {
    //@ts-ignore
    component: DialogsPage,
    path: '/tee',
    exact: false,
  },
  {
    //@ts-ignore
    component: DialogsPage,
    path: '/dialogs',
    exact: false,
  },
];
