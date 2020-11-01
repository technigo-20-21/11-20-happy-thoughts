import React, { useState } from 'react';

export const ThoughtLikes = ({ setThoughts, thoughts }) => {
  const [likedThought, setLikedThougt] = useState([]);
  const getLikedThought = (id) => {
    const isLiked = thoughts.map((thought) => {
      if (id === thought._id) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(isLiked);
    if (!likedThought.includes(id)) {
      setLikedThougt([...likedThought, id]);
    }
  };

  return (
    <div>
      <span role="img" aria-label="red heart">❤️</span>
      <p>{getLikedThought}</p>
    </div>
  )
};
