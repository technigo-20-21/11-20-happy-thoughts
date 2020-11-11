import React from 'react';

export const ThoughtLikes = ({ id, onLikedThought }) => {
  return (
    <button type="button" onClick={() => onLikedThought(id)} className="liked-button">
      <span role="img" aria-label="red heart" className="heart">❤️</span>
    </button>
  )
};
