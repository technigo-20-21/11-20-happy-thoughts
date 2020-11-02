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
      <p key={id} id={id}>
        {message}
        <span className="thought-time">{time}</span>
        <span className="liked-container">
          <ThoughtLikes id={id} onLikedThought={onLikedThought} />
          <span className="liked"> x {hearts}</span>
        </span>
      </p>
    </div>
  );
};
