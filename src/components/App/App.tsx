import React from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import './App.scss';
import AppRouter from 'routing/AppRouter';

export const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <AppRouter />
    </>
  );
};
