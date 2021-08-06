import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  BiMessageSquareDetail,
  BiGridAlt,
  BiGroup,
  BiCog,
  BiUser,
} from 'react-icons/bi';
import { Divider } from 'shared/ui/Divider';
import { Button } from 'shared/ui/Button';
import { ButtonGroup } from 'shared/ui/ButtonGroup';
import { Tooltip } from 'shared/ui/Tooltip';
import './Sidebar.scss';

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
