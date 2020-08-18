import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  logo: {
    height: 140,
    weight: 200,
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, -50%)',
    color: '#3C8B73',
  },
}));

const AnnouncemntPage = () => {
  const classes = useStyle();
  return (
    <div>
      <img alt="logo-icon" src="./BMLogo.png" className={classes.logo} />
    </div>
  );
};

export default AnnouncemntPage;
