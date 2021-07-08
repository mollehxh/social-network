import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRoute, RoutePaths, privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const user = true;

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact}>
          <Component />
        </Route>
      ))}
      <Redirect to={RoutePaths.FEED} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component, exact }: IRoute) => (
        <Route path={path} exact={exact}>
          <Component />
        </Route>
      ))}
      <Redirect to={RoutePaths.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
