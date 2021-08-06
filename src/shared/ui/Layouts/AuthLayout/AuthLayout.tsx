import React, { FC } from 'react';
import './AuthLayout.scss';

export const AuthLayout: FC = ({ children }) => {
  return <main className='auth-page'>{children}</main>;
};
