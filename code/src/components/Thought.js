import React from 'react';
import { ThoughtLikes } from './ThoughtLikes';

export const Thought = ({
  message,
  hearts,
  time,
  id,
  onLikedThought
}) => {

  const onLikedThought = (id) => {
    const updateHearts = thoughts.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updateHearts);
  };

  return (
    <div className="thought-container">
      <p className="thought" id={id}>
        {message}
      </p>
      <div className="liked-container">
        <ThoughtLikes id={id} onLikedThought={onLikedThought} />
        <p className="liked"> x {hearts}</p>
      </div>
      <p className="thought-time">{time}</p>
    </div>
  );
};