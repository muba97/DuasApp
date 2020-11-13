import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import NewFundItem from '../components/NewFundItem';

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

const AddFundPage = () => {
  const [isLoggedIn, setLoginStatus] = useState(false);
  const classes = useStyles();
  const checkUserAuthentication = async () => {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        setLoginStatus(true);
        console.log(user);
        console.log('Should be good');
      })
      .catch((err) => {
        setLoginStatus(false);
        console.log(err);
        console.log('Should not be good');
      });
  };
  useEffect(() => {
    checkUserAuthentication();
  });
  if (isLoggedIn) {
    return (
      <div className={classes.root} data-testid="newServicePage">
        <NewFundItem />
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not authenticated.</h1>
      </div>
    );
  }
};

export default AddFundPage;