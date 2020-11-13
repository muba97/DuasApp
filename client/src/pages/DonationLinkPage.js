import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import Donation from '../components/Donation';
import awsExports from '../aws-exports';
import { listFundRaiserss } from '../graphql/queries';

const useStyle = makeStyles(() => ({
  root: {
    margin: 5,
    marginTop: '5px',
  },
}));
Amplify.configure(awsExports);

const GeneralPage = () => {
  const classes = useStyle();

  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      const donationData = await API.graphql(graphqlOperation(listFundRaiserss));
      console.log('donation', donationData)
      const donationList = donationData.data.listFundRaiserss.items;
      console.log('song list', donationList);
      setLinks(donationData.data.listFundRaiserss.items);
    } catch (error) {
      console.log('error on fetching songs', error);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div>
      <div className="has-text-centered mt-1 mb-6">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      {links.map((access) => (
        <div key={access.id} className={classes.root}>
          <Donation items={access} />
        </div>
      ))}
    </div>
  );
};

export default GeneralPage;
