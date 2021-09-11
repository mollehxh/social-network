import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  Tooltip,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import React from 'react';

type AppLayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

export const AppLayout = ({ children, title }: AppLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <Avatar />
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant='permanent'>
        <List className={classes.toolbar}>
          <NavLink to='/feed'>
            <Tooltip title='Feed' placement='right'>
              <ListItem button>
                <ListItemIcon className={classes.listItemIcon}>
                  <WebIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <NavLink to='/dialogs'>
            <Tooltip title='Dialogs' placement='right'>
              <ListItem button>
                <ListItemIcon className={classes.listItemIcon}>
                  <MailIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
          <NavLink to='/friends'>
            <Tooltip title='Friends' placement='right'>
              <ListItem button>
                <ListItemIcon className={classes.listItemIcon}>
                  <PeopleAltIcon />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
          </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </>
  );
};
