// src/pages/Secret.js
import React, { useState } from 'react';

export default function Secret() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'qya') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="container">
      {isAuthenticated ? (
        <h1 className="title">Welcome to the Secret Page!</h1>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="form__input"
            required
          />
          <button className="form__button" type="submit">
            Enter
          </button>
        </form>
      )}
    </div>
  );
}
