import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Boxes from './components/Boxes';

function App() {

  const [ colorArray, setColorArray ] = useState([])
  return (
    <div className="App">
      <Form colorArray={ colorArray } setColorArray={ setColorArray } />
      <Boxes colorArray={ colorArray } />
      

    </div>
  );
}

export default App;
