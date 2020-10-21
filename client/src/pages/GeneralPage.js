import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import General from '../components/Duas';
import awsExports from '../aws-exports';
import { listLabelss, listItemss } from '../graphql/queries';

const useStyle = makeStyles(() => ({
  root: {
    margin: 5,
    marginTop: '5px',
  },
}));
Amplify.configure(awsExports);

const GeneralPage = () => {
  const classes = useStyle();

  const [labels, setlabels] = useState([]);

  const fetchLabels = async () => {
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
    fetchLabels();
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
  };
  return (
    <div>
      <div className="has-text-centered mt-1">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      {labels.map((access) => (
        <div key={access.label} className={classes.root}>
          <General labels={access.label} duaItems={handleChange(access.label)} />
        </div>
      ))}
    </div>
  );
};

export default GeneralPage;
