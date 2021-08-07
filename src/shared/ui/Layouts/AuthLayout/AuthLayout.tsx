import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { FullPageLoader } from 'shared/ui/FullPageLoader';
import './AuthLayout.scss';

export const AuthLayout: FC = ({ children }) => {
  const loading = useSelector((state: any) => state.auth.isLoading);

  return (
    <>
      <Transition timeout={250} in={loading} mountOnEnter unmountOnExit>
        {state => <FullPageLoader state={state} />}
      </Transition>
      <main className='auth-page'>{children}</main>
    </>
  );
};
