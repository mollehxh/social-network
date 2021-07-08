import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  to?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, to }) => {
  return to ? (
    <NavLink
      className='button'
      activeClassName='button button--active'
      to={to}
      onClick={onClick}
    >
      {children}
    </NavLink>
  ) : (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};
