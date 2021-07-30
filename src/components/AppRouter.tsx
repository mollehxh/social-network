import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  IRoute,
  RoutePaths,
  privateRoutes,
  publicRoutes,
} from '../routing/routes';
import { AppLayout } from 'components/Layouts/AppLayout';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact} key={path}>
          <AppLayout>
            <Component />
          </AppLayout>
        </Route>
      ))}
      <Redirect to={RoutePaths.FEED} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact} key={path}>
          <AuthLayout>
            <Component />
          </AuthLayout>
        </Route>
      ))}
      <Redirect to={RoutePaths.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
