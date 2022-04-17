import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Topmenu from './components/Topmenu';
import 'bootstrap/dist/css/bootstrap.css'
import RecipeTile from './components/RecipeTile';
import Home from './Home';
import Recipe  from './classes/Recipe.js';



function App() {
  
  return (
    <Router>
      <div className="App">
        <Topmenu />
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
