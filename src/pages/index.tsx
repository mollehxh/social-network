import { useStore } from 'effector-react';
import { $isAuthenticated } from 'entities/user/model';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteConfig, privateRoutes, publicRoutes } from './routes';

export const Routing = () => {
  const isAuth = useStore($isAuthenticated);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }: RouteConfig) => (
        <Route path={path} component={component} exact={exact} />
      ))}
      <Redirect to='/dialogs' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }: RouteConfig) => (
        <Route path={path} component={component} exact={exact} />
      ))}
      <Redirect to='/auth' />
    </Switch>
  );
};
