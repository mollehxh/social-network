import { Redirect, Route, Switch } from 'react-router-dom';
import { sessionModel } from 'entities/session';
import { RouteConfig, privateRoutes, publicRoutes } from './routes';

export const Routing = () => {
  const session = sessionModel.useSession();

  return session ? (
    <Switch>
      {privateRoutes.map(({ path, component, exact }: RouteConfig) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
      <Redirect to='/dialogs' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, component, exact }: RouteConfig) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
      <Redirect to='/auth' />
    </Switch>
  );
};
