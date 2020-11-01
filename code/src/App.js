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

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <ThoughtsInput />
      <ThoughtsList thoughtsList={thoughts} />
    </div>
  );
};
