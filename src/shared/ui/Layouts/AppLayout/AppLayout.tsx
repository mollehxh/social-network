import React from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { FullPageLoader } from 'shared/ui/FullPageLoader';
import { Header } from 'shared/ui/Header';
import { Sidebar } from 'shared/ui/Sidebar';
import './AppLayout.scss';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const AppLayout = ({ children, title }: Props) => {
  const loading = useSelector((state: any) => state.auth.isLoading);
  return (
    <>
      <Transition timeout={250} in={loading} mountOnEnter unmountOnExit>
        {state => <FullPageLoader state={state} />}
      </Transition>
      <Sidebar />
      <Header title={title} />
      <main className='app-page'>{children}</main>
    </>
  );
};
