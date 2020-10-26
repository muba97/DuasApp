import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import Navbar from './components/Navbar';
import AnnoucementPage from './pages/AnnoucementPage';
import GeneralPage from './pages/GeneralPage';
import EmotionPage from './pages/EmotionPage';
import SituationPage from './pages/SituationPage';
import AdminGeneralPage from './pages/AdminGeneralPage';
import LoginPage from './pages/LoginPage';
import NewItemPage from './pages/NewItemPage';
import SearchPage from './pages/SearchPage';
import awsExports from './aws-exports';
import { listLabelss } from './graphql/queries';

Amplify.configure(awsExports);
function App() {
  const [duas, setduas] = useState([]);

  async function fetchduas() {
    try {
      const duasData = await API.graphql(graphqlOperation(listLabelss));
      const duas = duasData.data.listLabelss.items
      console.log('duas list', duas);
      setduas(duas)
    } catch (err) { console.log('error fetching duas', err) }
  }
  useEffect(() => {
    fetchduas();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AnnoucementPage />
          </Route>
          <Route exact path="/general">
            <GeneralPage />
          </Route>
          <Route exact path="/emotion">
            <EmotionPage />
          </Route>
          <Route exact path="/situational">
            <SituationPage />
          </Route>
          <Route exact path="/scholarAdmin">
            <AdminGeneralPage />
          </Route>
          <Route exact path="/scholarlogin">
            <LoginPage />
          </Route>
          <Route exact path="/add">
            <NewItemPage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
