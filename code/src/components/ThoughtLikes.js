import React from 'react';
import { LIKES_URL } from '../urls';

export const ThoughtLikes = ({ id, onLikedThought }) => {
  const handleLikedThought = () => {
    fetch(LIKES_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      onLikedThought(id);
    });

  return (
    <button type="button" onClick={handleLikedThought} className="liked-button">
      <span role="img" aria-label="red heart" className="heart">❤️</span>
    </button>
  )
};
