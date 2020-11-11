import React from 'react';
import { ThoughtLikes } from './ThoughtLikes';

export const Thought = ({
  message,
  hearts,
  time,
  id,
  onLikedThought
}) => {
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