import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Duas from '../components/Duas';

const EmotionInfo = {
  title: 'General',
  duasLabels: [
    { label: '99 Names Of ALLAH', title: 'General' },
    { label: 'Sunnahs', title: 'General' },
  ],
  duasItems: [
    {
      title: 'Al Aziz',
      arabic: 'ٱلْعَزِيزُ',
      description: 'The All Mighty',
      label: '99 Names Of ALLAH',
      sources: 'From the Quran',
    },
    {
      title: 'Al Aziz',
      arabic: 'ٱلْعَزِيزُ',
      description: 'The All Mighty',
      label: '99 Names Of ALLAH',
      sources: 'From the Quran',
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

const EmotionPage = () => {
  const classes = useStyle();
  const handleChange = (e) => {
    const temp = [];
    for (let i = 0; i < EmotionInfo.duasItems.length; i += 1) {
      if (EmotionInfo.duasItems[i].label === e) {
        temp.push(EmotionInfo.duasItems[i]);
      }
    }
    return temp;
  };
  return (
    <div>
      <div className="has-text-centered mt-1">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      {EmotionInfo.duasLabels.map((access) => (
        <div key={access.label} className={classes.root}>
          <Duas labels={access.label} duaItems={handleChange(access.label)} />
        </div>
      ))}
    </div>
  );
};

export default EmotionPage;
