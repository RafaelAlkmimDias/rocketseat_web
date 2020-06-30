import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0);

  const handleButtonClick = () =>{
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello World" />
      <div>{counter}</div>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
