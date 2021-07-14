import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'white' | 'default';
  fullWidth?: boolean;
  href?: string;
  icon?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  color,
  fullWidth,
  href,
  icon,
  onClick,
}) => {
  return href ? (
    <NavLink
      to={href}
      activeClassName={classNames('button button--link button--white')}
      className={classNames('button button--link', {
        'button--icon': icon,
        'button--full-width': fullWidth,
        [`button--${color}`]: color,
      })}
      onClick={onClick}
    >
      {children}
    </NavLink>
  ) : (
    <button
      className={classNames('button', {
        'button--icon': icon,
        'button--full-width': fullWidth,
        [`button--${color}`]: color,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
