import React, { useEffect } from 'react';
import AppRouter from 'components/AppRouter';
import './App.scss';
import { FullPageLoader } from 'components/FullPageLoader';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { Transition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const loading = useSelector((state: RootState) => state.auth.isLoading);

  return (
    <>
      <Transition timeout={250} in={loading} mountOnEnter unmountOnExit>
        {(state) => <FullPageLoader state={state} />}
      </Transition>
      <ToastContainer />
      <AppRouter />
    </>
  );
};
