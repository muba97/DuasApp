import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnoucementPage from './pages/AnnoucementPage';
import GeneralPage from './pages/GeneralPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AnnoucementPage />
          </Route>
          <Route exact path="/generalduas">
            <GeneralPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
