import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  BiMessageSquareDetail,
  BiGridAlt,
  BiGroup,
  BiCog,
  BiUser,
} from 'react-icons/bi';
import { Divider } from 'components/UI/Divider';
import { Button } from 'components/UI/Button';
import './Sidebar.scss';
import { ButtonGroup } from 'components/UI/ButtonGroup';
import { Tooltip } from 'components/UI/Tooltip';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <Button icon color='default' href='/feed'>
          <FaTelegramPlane />
        </Button>
      </div>

      <Divider />
      <div className='sidebar-middle'>
        <ButtonGroup>
          <Tooltip content='Profile' placement='right'>
            <Button icon href='/profile'>
              <BiUser />
            </Button>
          </Tooltip>
          <Tooltip content='Feed' placement='right'>
            <Button icon href='/feed'>
              <BiGridAlt />
            </Button>
          </Tooltip>
          <Tooltip content='Messages' placement='right'>
            <Button icon href='/messages'>
              <BiMessageSquareDetail />
            </Button>
          </Tooltip>
          <Tooltip content='Friends' placement='right'>
            <Button icon href='/friends'>
              <BiGroup />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
      <Divider />

      <div className='sidebar-bottom'>
        <Button icon>
          <BiCog />
        </Button>
      </div>
    </div>
  );
};
