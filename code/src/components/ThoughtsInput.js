import React, { useState } from 'react';

export const ThoughtsInput = ({ onThoughtChange }) => {
  const [newThought, setNewThought] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onThoughtChange(newThought);
    setNewThought('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="textarea"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
        className="form-text" />
      <input
        type="submit"
        value="Send Happy Thought"
        className="add-thought-button" />
    </form>
  );
};

