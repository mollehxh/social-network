import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'pages';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  );
};

export default withProviders(App);
