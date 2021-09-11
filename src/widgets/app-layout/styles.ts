import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  toolbar: { marginTop: 85 },
  drawer: { position: 'absolute', zIndex: -1 },
  content: {
    margin: '64px 0 0 57px',
  },
}));
