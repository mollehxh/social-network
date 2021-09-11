import { Button } from '@material-ui/core';
import { authModel } from '..';

export const SignOutButton = () => {
  return <Button onClick={() => authModel.fxSignOut()}>Sign Out</Button>;
};
