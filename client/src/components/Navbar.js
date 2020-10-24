import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#121616',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 40,
    weight: 140,
    position: 'absolute',
    left: '50%',
    top: '50%',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    transform: 'translate(-50%, -50%)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#3C8B73',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#121616',
    borderColor: '#3C8B73',
    borderWidth: 3,
  },
  drawerHeader: {
    display: 'absolute',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    justifyContent: 'center',

    color: '#3C8B73',
    display: 'absolute',
  },
  icon: {
    color: '#3C8B73',
  },
  dividers: {
    backgroundColor: '#3C8B73',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setLoginStatus] = useState(false);

  const isAuthenticated = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setLoginStatus(true);
      console.log('Is logged in');
    } catch (Err) {
      setLoginStatus(false);
      console.log('Is not logged in');
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="abolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img alt="logo-icon" src="/ColorLogo.svg" className={classes.logo} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.icon}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider className={classes.dividers} />
        <List>
          <ListItem component={Link} to="/general" className={classes.content}>
            General
          </ListItem>
        </List>
        <List>
          <ListItem component={Link} to="/emotion" className={classes.content}>
            Emotional
          </ListItem>
        </List>
        <List>
          <ListItem component={Link} to="/situational" className={classes.content}>
            Situational
          </ListItem>
        </List>
        {isLoggedIn && (
          <div>
            <List>
              <ListItem component={Link} to="/scholarAdmin" className={classes.content}>
                GeneralAdmin
              </ListItem>
            </List>
            <List>
              <ListItem component={Link} to="/add" className={classes.content}>
                Add
              </ListItem>
            </List>
            <List>
              <ListItem
                type="button"
                onClick={() => signOut()}
                component={Link}
                to="/scholarlogin"
                className={classes.content}
              >
                SignOut
              </ListItem>
            </List>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Navbar;
