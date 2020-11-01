import React from 'react';
import moment from 'moment';

import { ThoughtLikes } from './ThoughtLikes';

export const ThoughtsList = ({ thoughtsList }) => {
  return (
    <div>
      {thoughtsList.map((thought) => (
        <p
          className="thought"
          key={thought._id}
          id={thought._id}>
          {thought.message}
          <span className="thought-time">
            {moment(thought.createdAt).fromNow()}
          </span>
          <div className="liked-container">
            <ThoughtLikes id={thought._id} />
            <span className="liked-times"> x {thought.hearts}</span>
          </div>
        </p>
      ))}
    </div>
  );
};
