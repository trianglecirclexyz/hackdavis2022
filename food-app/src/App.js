import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
