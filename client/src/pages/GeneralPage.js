import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import General from '../components/General';

const GeneralInfo = {
  title: 'General',
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
    left: '50%',
    top: '20%',
    transform: 'translate(25%)',
    color: '#3C8B73',
    justifyContent: 'space-between',
    display: 'flex',
    borderRadius: '4px',
    padding: '10px 15px 10px 15px',
  },
  root: {
    margin: 40,
    marginTop: '5px',
  },
}));

const DuasPage = () => {
  const classes = useStyle();
  const handleChange = (e) => {
    const temp = [];
    for (let i = 0; i < GeneralInfo.duasItems.length; i += 1) {
      if (GeneralInfo.duasItems[i].label === e) {
        temp.push(GeneralInfo.duasItems[i]);
      }
    }
    return temp;
  };
  return (
    <div>
      <div className={classes.image}>
        <Grid item xs={10} md={10} container justify="center" alignItems="center">
          <img alt="logo-icon" src="./BMLogo.png" className={classes.logo} />
        </Grid>
      </div>
      {GeneralInfo.duasLabels.map((access) => (
        <div key={access.label} className={classes.root}>
          <General labels={access.label} items={handleChange(access.label)} />
        </div>
      ))}
    </div>
  );
};

export default DuasPage;
