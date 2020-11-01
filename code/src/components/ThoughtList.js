import React, { useState } from 'react';
import moment from 'moment';
import { Thought } from './Thought'
import { THOUGHTS_URL } from '../urls';

export const ThoughtList = ({ thoughts, setThoughts }) => {
  const [likedThought, setLikedThougt] = useState([]);

  const getLikedThought = (id) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (id === thought._id) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
    if (!likedThought.includes(id)) {
      setLikedThougt([...likedThought, id]);
    }
  };

  const onLikedThought = (id) => {
    fetch(`${THOUGHTS_URL}/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => getLikedThought(id));
  };

  return (
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
        );
      })}
    </div>
  );
};
