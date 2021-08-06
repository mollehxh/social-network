import React, { FC } from 'react';
import classNames from 'classnames';
import './Input.scss';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string;
  fullWidth?: boolean;
  type?: 'password';
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

export const Input: FC<InputProps> = ({
  placeholder = '',
  fullWidth,
  type = '',
  name = '',
  onChange = () => {},
  ...rest
}) => {
  return (
    <div
      className={classNames('input-wrapper', {
        'input-wrapper--full-width': fullWidth,
      })}
    >
      <input
        name={name}
        type={type}
        {...rest}
        onChange={onChange}
        className={classNames('input-wrapper__input', {
          'input-wrapper__input--full-width': fullWidth,
        })}
        placeholder=' '
      />
      <label className='input-wrapper__label'>{placeholder}</label>
    </div>
  );
};
