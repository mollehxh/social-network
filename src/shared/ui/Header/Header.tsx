import React from 'react';
import { Popup } from 'shared/ui/Popup';
import { auth } from 'shared/config/firebaseConfig';
import { useLocation } from 'react-router-dom';
import './Header.scss';

interface Props {
  title?: string;
}

export const Header = ({ title }: Props) => {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>

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
