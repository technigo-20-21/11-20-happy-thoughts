import React, { useState, useEffect } from 'react';

import { THOUGHTS_URL } from './urls';
import { ThoughtsInput } from './components/ThoughtsInput';
import { ThoughtsList } from './components/ThoughtsList';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error));
  }

  const postThoughts = (newThought) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => {
        fetchThoughts();
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <ThoughtsInput onThoughtChange={postThoughts} />
      <ThoughtsList thoughtsList={thoughts} />
    </div>
  );
};
