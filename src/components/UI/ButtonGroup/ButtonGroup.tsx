import React, { FC } from 'react';
import './ButtonGroup.scss';

export const ButtonGroup: FC = ({ children }) => {
  return <div className='button-group'>{children}</div>;
};
