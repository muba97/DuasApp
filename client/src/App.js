import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnoucementPage from './pages/AnnoucementPage';
import GeneralPage from './pages/GeneralPage';
import EmotionPage from './pages/EmotionPage';
import SituationPage from './pages/SituationPage';
import AdminGeneralPage from './pages/AdminGeneralPage';
import LoginPage from './pages/LoginPage';

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
