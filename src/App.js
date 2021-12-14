import React, { useState } from 'react';
import './style.css';

const App = () => {
  let PresentTime = new Date().toLocaleTimeString();
  const [CurrTime, setCurrTime] = useState(PresentTime);

  const UpdateTime = () => {
    PresentTime = new Date().toLocaleTimeString();
    setCurrTime(PresentTime);
  };
  return (
    <>
      <h1>{CurrTime}</h1>
      <button onClick={UpdateTime}>click me</button>
    </>
  );
};

export default App;
