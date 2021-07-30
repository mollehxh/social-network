import React from 'react';
import { Popup } from 'components/UI/Popup';
import './Header.scss';
import { auth } from 'firebaseConfig';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1 className='header__title'>{location.pathname.slice(1)}</h1>

      <Popup placement='bottom-end'>
        <Popup.TargetElement>
          <div className='header__user'></div>
        </Popup.TargetElement>
        <Popup.Options>
          <Popup.Option onClick={() => auth.signOut()}>Log out</Popup.Option>
        </Popup.Options>
      </Popup>
    </header>
  );
};
