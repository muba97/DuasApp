import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Login from '../components/Login';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  logo: {
    height: 80,
    weight: 240,
  },
});

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div data-testid="loginPage">
      <div className={classes.root}>
        <img alt="logo-icon" src="/Blacklogo.svg" className={classes.logo} />
      </div>
      <Grid container justify="center" alignItems="center">
        {' '}
        <Login />
      </Grid>
    </div>
  );
};

export default LoginPage;
