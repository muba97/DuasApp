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
  return (
    // <div className={classes.root}>
    //   <AppBar position="static" className={classes.appbar}>
    //     <Toolbar>
    //       <img alt="logo-icon" src="/ColorLogo.svg" className={classes.logo} />
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <nav role="navigation" aria-label="main navigation" className="navbar is-dark">
      <div className="navbar-is-centered">
        <img
          alt="logo-icon"
          src="/ColorLogo.svg"
          width="140"
          height="35"
          style={{
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        />
      </div>
    </nav>
  );
};
export default Navbar;
