import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import './Layout.scss';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </>
  );
};
