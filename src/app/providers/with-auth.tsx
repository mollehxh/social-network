import { useEffect } from 'react';
import { auth } from 'shared/config/firebase-config';
import { setUser } from 'entities/user/model';

export const withAuth = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      unsubscribe();
    });
  }, []);

  return <div>{component()}</div>;
};
