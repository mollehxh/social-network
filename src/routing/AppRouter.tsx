import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRoute, RoutePaths, privateRoutes, publicRoutes } from './routes';
import { AppLayout } from 'components/Layouts/AppLayout';
import { AuthLayout } from 'components/Layouts/AuthLayout';

const AppRouter = () => {
  const user = false;

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact}>
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
        <Route path={path} exact={exact}>
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
