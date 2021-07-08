import React from 'react';
import { Popup } from 'components/UI/Popup';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Header</h1>

      <Popup
        top={72}
        right={-10}
        component={<div className='header__user'></div>}
      >
        <div>
          <p>Log out</p>
        </div>
      </Popup>
    </header>
  );
};
