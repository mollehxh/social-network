import React from 'react';
import { authModel } from 'features/auth';
import { auth } from 'shared/config/firebaseConfig';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/store/hooks';

export const withAuth = (Component: React.FC) => () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authModel.actions.setPending(true));
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(authModel.actions.setPending(true));
      if (user) {
        dispatch(authModel.actions.setUser(user));
        dispatch(authModel.actions.setIsAuth(true));
      } else {
        dispatch(authModel.actions.setUser(null));
        dispatch(authModel.actions.setIsAuth(false));
      }
      dispatch(authModel.actions.setPending(false));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Component />
    </div>
  );
};
