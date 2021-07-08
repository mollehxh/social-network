import React from 'react';
import { Popup } from 'components/UI/Popup';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Header</h1>

      <Popup placement='bottom-end'>
        <Popup.TargetElement>
          <div className='header__user'></div>
        </Popup.TargetElement>
        <Popup.Options>
          <Popup.Option>Log out</Popup.Option>
        </Popup.Options>
      </Popup>
    </header>
  );
};
