import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Hello from './components/Hello';
import Integer from './components/Integer';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/:hello/:color/:background" />
        <Integer path="/:int" />
      </Router>

    </div>
  );
}

export default App;
