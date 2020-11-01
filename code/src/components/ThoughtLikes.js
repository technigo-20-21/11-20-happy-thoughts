import React from 'react';

export const ThoughtLikes = ({ id, onLikedThought }) => {
  return (
    <button type="button" onClick={() => onLikedThought(id)}>
      <span role="img" aria-label="red heart">❤️</span>
    </button>
  )
};
