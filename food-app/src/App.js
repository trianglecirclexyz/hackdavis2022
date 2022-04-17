import React from 'react'; 
import './App.css';
import Recipe from './components/Recipe';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Recipe title='Tikka Malsala' />
      <div className="App">
          <Route path="/">
            <Home />
          </Route>
      </div>
    </Router>
  );
}

export default App;
