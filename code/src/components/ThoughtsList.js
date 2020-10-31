import React, { useState, useEffect } from 'react';

import { THOUGHTS_URL } from '../urls';

export const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data.reverse()))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <p thoughts={thoughts} />
    </div>
  );
};
