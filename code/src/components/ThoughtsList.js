import React from 'react';
import moment from 'moment';

export const ThoughtsList = ({ thoughtsList }) => {
  return (
    <div>
      {
        thoughtsList.map((thought) => (
          <p className="thought" key={thought._id}>
            {thought.message}
            <span className="thought-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  );
};
