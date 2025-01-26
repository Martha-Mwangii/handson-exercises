import React, { useState } from 'react';
import './Day1.css';
import image from "../../assets/image.jpg";

const Day1 = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <h1 style={{ fontFamily: 'Bungee Spice, cursive', color: 'darkblue' }}> Image and Text with a Counter Button</h1>
      <button className="click-button" onClick={handleClick}>Click Me</button>
      <p className="click-message">You clicked this button {counter} times</p>
    </div>
  );
};

export default Day1;