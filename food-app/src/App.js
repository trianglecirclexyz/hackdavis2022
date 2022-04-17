import React from 'react'; 
import './App.css';
import Recipe from './components/Recipe';
import Topmenu from './components/Topmenu';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  return (
    <Router>
      <div className="App">
        <Topmenu />

        <Recipe title="Salami" />
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
