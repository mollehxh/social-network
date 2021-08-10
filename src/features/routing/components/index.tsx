import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from 'app/store/hooks';
import { authModel } from 'features/auth';
import { privateRoutes, publicRoutes } from '../model';

export const Routing = () => {
  const isAuth = useAppSelector(authModel.seletors.isAuth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
      <Redirect to='/feed' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
      <Redirect to='/sign-in' />
    </Switch>
  );
};
