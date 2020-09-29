import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import General from '../components/DuasAdmin';

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
const AdminGeneralPage = () => {
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
  const handleChange = (e) => {
    const temp = [];
    for (let i = 0; i < GeneralInfo.duasItems.length; i += 1) {
      if (GeneralInfo.duasItems[i].label === e) {
        temp.push(GeneralInfo.duasItems[i]);
      }
    }
    return temp;
  };
  if (isLoggedIn) {
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
  } else {
    return (
      <div>
        <h1>You are not authenticated</h1>
      </div>
    );
  }
};

export default AdminGeneralPage;
