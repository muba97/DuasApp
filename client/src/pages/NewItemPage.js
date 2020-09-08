import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewItem from '../components/NewItem';

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

const NewServicePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="newServicePage">
      <NewItem />
    </div>
  );
};

export default NewServicePage;
