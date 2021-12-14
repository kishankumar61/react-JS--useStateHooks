import React, { useState } from 'react';
import './style.css';


const App = () => {
let time=new Date().toLocaleTimeString();

const [currTime,setCurrTime]=useState(time);

const UpdateTime=()=>{
time=new Date().toLocaleTimeString();
setCurrTime(time)
}
setInterval(UpdateTime,1000);

  return (
    <>
      <h1>{currTime}</h1>
    </>
  );
};

export default App;
