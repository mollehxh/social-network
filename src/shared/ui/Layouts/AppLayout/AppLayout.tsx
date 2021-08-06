import React from 'react';
import { Header } from 'shared/ui/Header';
import { Sidebar } from 'shared/ui/Sidebar';
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
