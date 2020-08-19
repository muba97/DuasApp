import React, {useState} from 'react';
import { makeStyles, Toolbar, AppBar, Drawer } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#121616',
  },
  logo: {
    height: 55,
    weight: 80,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Navbar = () => {
  const classes = useStyle();
  const [state, setState] = React.useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img alt="logo-icon" src="/ColorLogo.svg" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
