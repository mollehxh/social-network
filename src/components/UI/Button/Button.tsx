import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  href?: string;
}

export const Button: FC<ButtonProps> = ({ children, onClick, href }) => {
  return href ? (
    <NavLink
      className='button'
      activeClassName='button button--active'
      to={href}
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
