import React, { useState } from "react";
import TestMe from './components/TestMe'
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  const generateColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
   };



  return (
    <div className="App" style={{ backgroundColor: color }}>
      <button id="a-good-old-clicker" onClick={generateColor}>
        change this color yo
      </button>
      <TestMe name='cole'/>
    </div>
  );
}

export default App;
