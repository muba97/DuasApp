import React, { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import General from '../components/DuasAdmin';
import { listLabelss, listItemss } from '../graphql/queries';

const useStyle = makeStyles(() => ({
  root: {
    margin: 5,
    marginTop: '5px',
  },
}));
const AdminGeneralPage = () => {
  const classes = useStyle();
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [labels, setlabels] = useState([]);

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
    isAuthenticated();
    fetchLabels();
  }, []);

  if (isLoggedIn) {
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
        <div className="has-text-right mr-2">
          <Link to="/add">
            <button
              className="button is-primary"
              type="button"
              data-testid="newServiceButton"
            >
              ADD NEW SERVICE
            </button>
          </Link>
        </div>
        {labels.map((access) => (
          <div key={access.label} className={classes.root}>
            <General labels={access.label} duaItems={handleChange(access.label)} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>You are not authenticated</h1>
    </div>
  );
};

export default AdminGeneralPage;
