import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import './AppLayout.scss';

export const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className='app-page'>{children}</main>
    </>
  );
};
