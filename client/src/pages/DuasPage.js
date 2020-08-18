import React from 'react';
import { makeStyles } from '@material-ui/core';

const duasInfo = {
  duasTitles: [{ title: 'General' }, { title: 'Emotions' }],
  duasLabels: [
    { label: '99 Names Of Allah and its benefits', title: 'General' },
    { label: 'Sunnahs of Prophet Muhammad SAW', title: 'General' },
  ],
  duasItems: [
    {
      title: 'Al Aziz',
      arabic: 'العزيز',
      description: 'From the Quran',
      label: '99 Names Of Allah and its benefits',
    },
  ],
};

const useStyle = makeStyles(() => ({
  logo: {
    height: 140,
    weight: 180,
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, -50%)',
    color: '#3C8B73',
  },
}));

const DuasPage = () => {
  const classes = useStyle();
  return (
    <div>
      <img alt="logo-icon" src="./BMLogo.png" className={classes.logo} />
      {duasInfo.duasTitles.map((label) => (
        <div className={classes.root}>Duas</div>
      ))}
    </div>
  );
};

export default DuasPage;
