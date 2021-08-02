import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  IRoute,
  RoutePaths,
  privateRoutes,
  publicRoutes,
} from '../routing/routes';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useSelector } from 'react-redux';
import { userSelector } from 'store/ducks/auth/selectors';

const AppRouter = () => {
  const user = useSelector(userSelector);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact} key={path}>
          <Component />
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
