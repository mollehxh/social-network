import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';

import {
  BiGridAlt,
  BiMessageSquareDetail,
  BiGroup,
  BiCog,
} from 'react-icons/bi';
import { ButtonGroup } from 'components/UI/ButtonGroup';
import { Button } from 'components/UI/Button/Button';
import { Divider } from 'components/UI/Divider';
import { Popup } from 'components/UI/Popup';
import { Tooltip } from 'components/UI/Tooltip';

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink className='sidebar__logo-link' to='/feed'>
        <FaTelegramPlane className='sidebar__logo icon' />
      </NavLink>

      <Divider />

      <div className='sidebar-menu'>
        <ButtonGroup>
          <Tooltip placement='right' content='Feed'>
            <Button to='/feed'>
              <BiGridAlt className='icon' />
            </Button>
          </Tooltip>

          <Tooltip placement='right' content='Messages'>
            <Button to='/messages'>
              <BiMessageSquareDetail className='icon' />
            </Button>
          </Tooltip>

          <Tooltip placement='right' content='Friends'>
            <Button to='/friends'>
              <BiGroup className='icon' />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>

      <Divider />

      <Popup
        left={58}
        bottom={-10}
        component={<BiCog className='sidebar__settings icon' />}
      >
        <div>
          <p>Change theme</p>
        </div>
      </Popup>
    </div>
  );
};
