import React, { useState } from 'react';

export const ThoughtsInput = ({ onThoughtChange }) => {
  const [newThought, setNewThought] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onThoughtChange(newThought);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
        className="form-text" />
      <input type="submit" className="form-button" value="Add message" />
    </form>
  );
};

