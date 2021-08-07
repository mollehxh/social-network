import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteInterface } from 'pages/types';
import { privateRoutes, publicRoutes } from './routes';
import { useSelector } from 'react-redux';

export const Routing = () => {
  const user = useSelector((state: any) => state.auth.user);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }: RouteInterface) => (
        <Route exact={exact} path={path} component={component} />
      ))}
      <Redirect to='/messages' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }: RouteInterface) => (
        <Route exact={exact} path={path} component={component} />
      ))}
      <Redirect to='/sign-in' />
    </Switch>
  );
};
