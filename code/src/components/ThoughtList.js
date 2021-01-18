import React, { useState } from 'react';
import moment from 'moment';
import { Thought } from './Thought'
import { THOUGHTS_URL } from '../urls';

export const ThoughtList = ({ thoughts, setThoughts }) => {


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
