import React from 'react';
import { LIKES_URL } from '../urls';

export const onLikedThought = (id) => {
  fetch(`${LIKES_URL}`, {
    method: 'POST',
    body: '',
    headers: { 'Content-Type': 'application/json' }
  }).then(() => getLikedThought(id));

  return (
    <button type="button" onClick={() => onLikedThought(id)} className="liked-button">
      <span role="img" aria-label="red heart" className="heart">❤️</span>
    </button>
  )
};
