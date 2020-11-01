import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { THOUGHTS_URL } from './urls';
import { ThoughtsInput } from './components/ThoughtsInput';
import { Thought } from './components/Thought';
import { ThoughtLikes } from './components/ThoughtLikes';

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

  const onLikedThought = (id) => {
    fetch(`THOUGHTS_URL/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    })
      .then(() => ThoughtLikes(id))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <ThoughtsInput onThoughtChange={postThoughts} />
      <div>
        {thoughts.map((thought) => {
          return (
            <Thought
              message={thought.message}
              hearts={thought.hearts}
              time={moment(thought.createdAt).fromNow()}
              key={thought._id}
              id={thought._id}
              setThoughts={setThoughts}
              thoughts={thoughts}
              onLikedThought={onLikedThought} />
          )
        })}
      </div>
      <div>
        <ThoughtLikes onLikedThought={onLikedThought} />
      </div>
    </div>
  );
};