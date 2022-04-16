import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/">
            <Home />
          </Route>
      </div>
    </Router>
  );
}

export default App;
