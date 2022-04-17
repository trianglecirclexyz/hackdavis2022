import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import RecipeTile from './components/RecipeTile';
import Home from './Home';
import Recipe  from './classes/Recipe';

const r = Recipe('chicken', 'is chicken', ['chicken'], ['cook chicken', 'done']);


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
