import React from 'react';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import './AppLayout.scss';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const AppLayout = ({ children, title }: Props) => {
  return (
    <>
      <Sidebar />
      <Header title={title} />
      <main className='app-page'>{children}</main>
    </>
  );
};
