import React, { FC } from 'react';
import classNames from 'classnames';
import './Input.scss';

interface InputProps {
  placeholder?: string;
  fullWidth?: boolean;
  type?: 'password';
}

export const Input: FC<InputProps> = ({ placeholder, fullWidth, type }) => {
  return (
    <div
      className={classNames('input-wrapper', {
        'input-wrapper--full-width': fullWidth,
      })}
    >
      <input
        type={type}
        className={classNames('input-wrapper__input', {
          'input-wrapper__input--full-width': fullWidth,
        })}
        placeholder=' '
      />
      <label className='input-wrapper__label'>{placeholder}</label>
    </div>
  );
};
