import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import General from '../components/Duas';
import awsExports from '../aws-exports';
import { listLabelss, listItemss } from '../graphql/queries';

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

Amplify.configure(awsExports);

const GeneralPage = () => {
  const [labels, setlabels] = useState([]);
  const [items, setItems] = useState([]);

  const fetchduas = async () => {
    const labelFilter = {
      title: {
        contains: 'General', // filter when title = 'General'
      },
    };
    try {
      const duaData = await API.graphql(
        graphqlOperation(listLabelss, { filter: labelFilter })
      );
      const duaList = duaData.data.listLabelss.items;
      console.log('song list', duaList);
      setlabels(duaData.data.listLabelss.items);
    } catch (error) {
      console.log('error on fetching songs', error);
    }
  };
  useEffect(() => {
    fetchduas();
  }, []);

  const handleChange = async (e) => {
    const itemFilter = {
      label: {
        contains: e, // filter when title = 'General'
      },
    };
    try {
      const itemData = await API.graphql(
        graphqlOperation(listItemss, { filter: itemFilter })
      );
      const itemList = itemData.data.listItemss.items;
      console.log('item List', itemData);
      return itemList;
    } catch (error) {
      console.log('error on fetching songs', error);
    }
    const temp = [];

    for (let i = 0; i < GeneralInfo.duasItems.length; i += 1) {
      if (GeneralInfo.duasItems[i].label === e) {
        temp.push(GeneralInfo.duasItems[i]);
      }
    }
  };
  return (
    <div>
      <div className="has-text-centered mt-1">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      {labels.map((access) => (
        <div key={access.label} className="mt-5">
          <General labels={access.label} duaItems={handleChange(access.label)} />
        </div>
      ))}
    </div>
  );
};

export default GeneralPage;
