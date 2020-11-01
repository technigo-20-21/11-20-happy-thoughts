import React from 'react';
import { ThoughtLikes } from './ThoughtLikes';

export const Thought = ({
  message,
  hearts,
  time,
  id
}) => {
  return (
    <div>
      <p key={id} id={id}>
        {message}
        <span className="thought-time">{time}</span>
        <div className="liked-container">
          <ThoughtLikes id={id} />
          <span className="liked"> x {hearts}</span>
        </div>
      </p>
    </div>
  );
};
