import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';
import css from './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:productId"/>
        <Update path="/:productId/edit"/>
      </Router>
    </div>
  );
}
export default App;