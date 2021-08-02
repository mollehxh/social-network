import React from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import { FullPageLoader } from 'components/FullPageLoader';
import { loadingStatusSelector } from 'store/ducks/auth/selectors';
import AppRouter from 'components/AppRouter';
import './App.scss';

export const App = () => {
  const loading = useSelector(loadingStatusSelector);

  return (
    <>
      <Transition timeout={250} in={loading} mountOnEnter unmountOnExit>
        {state => <FullPageLoader state={state} />}
      </Transition>
      <ToastContainer />
      <AppRouter />
    </>
  );
};
