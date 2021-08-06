import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteInterface } from 'pages/types';
import { publicRoutes } from './routes';

export const Routing = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, component, exact }: RouteInterface) => (
        <Route exact={exact} path={path} component={component} />
      ))}
      <Redirect to='/sign-in' />
    </Switch>
  );
};
