import React, { useState, useEffect } from 'react';

import { ThoughtList } from 'components/ThoughtList';
import { ThoughtsInput } from './components/ThoughtsInput';
import { THOUGHTS_URL } from './urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((thought) => setThoughts(thought))
      .catch((error) => console.error(error));
  }

  const postThoughts = (newThought) => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => fetchThoughts())
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <ThoughtsInput onThoughtChange={postThoughts} />
      <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};