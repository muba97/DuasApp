import React from 'react';
import General from '../components/Duas';

const GeneralInfo = {
  title: 'General',
  duasLabels: [
    { label: '99 Names Of ALLAH', title: 'General' },
    { label: 'Sunnahs', title: 'General' },
    { label: 'Zikhr', title: 'General' },
    { label: 'Meaning of Salah', title: 'General' },
    { label: 'Promised house in Jannah', title: 'General' },
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

const GeneralPage = () => {
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
      <div className="has-text-centered mt-1">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      {GeneralInfo.duasLabels.map((access) => (
        <div key={access.label} className="mt-5">
          <General labels={access.label} duaItems={handleChange(access.label)} />
        </div>
      ))}
    </div>
  );
};

export default GeneralPage;
