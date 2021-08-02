import React, { FC } from 'react';
import classNames from 'classnames';
import './FullPageLoader.scss';

interface FullPageLoaderProps {
  state: string;
}

export const FullPageLoader: FC<FullPageLoaderProps> = ({ state }) => {
  return (
    <div className={classNames('loader', { [state]: state })}>
      <div className='lds-ellipsis '>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
