import React from 'react';
import './App.css';
import About from './About'
import Converter from './Converter'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Converter} />
    </Switch>
   
  </div>
    </Router>
   
  );
}

export default App;
