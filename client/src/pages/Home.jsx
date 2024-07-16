import React from 'react';
import '../styles/Home.css';

export default function Home() {
  const handleButtonClick = (message) => {
    alert(message);
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>Haziq is the gayest man alive</p>

      <div>
        <p>This is a website dedicated for her </p>
        <div className="fixToText">
          <button onClick={() => handleButtonClick('Left button pressed')}>
            Left button
          </button>
          <button onClick={() => handleButtonClick('Right button pressed')}>
            Right button
          </button>
        </div>

        <button>click</button>
      </div>
    </div>
  );
}
