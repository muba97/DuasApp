import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import General from '../components/Search';

const useStyle = makeStyles(() => ({
  root: {
    margin: 5,
    marginTop: '5px',
  },
}));

const SearchPage = () => {
  const classes = useStyle();

  //   const [labels, setlabels] = useState([]);

  //   const fetchLabels = async () => {
  //     const labelFilter = {
  //       title: {
  //         contains: 'General', // filter when title = 'General'
  //       },
  //     };
  //     try {
  //       const duaData = await API.graphql(
  //         graphqlOperation(listLabelss, { filter: labelFilter })
  //       );
  //       const duaList = duaData.data.listLabelss.items;
  //       console.log('song list', duaList);
  //       setlabels(duaData.data.listLabelss.items);
  //     } catch (error) {
  //       console.log('error on fetching songs', error);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchLabels();
  //   }, []);

  //   const handleChange = async (e) => {
  //     const itemFilter = {
  //       label: {
  //         contains: e, // filter when title = 'General'
  //       },
  //     };
  //     try {
  //       const itemData = await API.graphql(
  //         graphqlOperation(listItemss, { filter: itemFilter })
  //       );
  //       const itemList = itemData.data.listItemss.items;
  //       console.log('item List', itemData);
  //       return itemList;
  //     } catch (error) {
  //       console.log('error on fetching songs', error);
  //     }
  //   };
  return (
    <div>
      <div className="has-text-centered mt-1">
        <img alt="logo-icon" src="./BMLogo.png" width="350" height="110" />
      </div>
      <div className={classes.root}>
        <General />
      </div>
    </div>
  );
};

export default SearchPage;
