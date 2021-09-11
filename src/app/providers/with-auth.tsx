import { useEffect } from 'react';
import { auth } from 'shared/config/firebase-config';
import { sessionModel } from 'entities/session';

export const withAuth = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      sessionModel.setSession(user);
      unsubscribe();
    });
  }, []);

  return <div>{component()}</div>;
};
