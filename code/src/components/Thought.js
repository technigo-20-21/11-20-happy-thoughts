import React from 'react';
import { ThoughtLikes } from './ThoughtLikes';

export const Thought = ({
  message,
  hearts,
  time,
  id,
  onLikedThought
}) => {
  const [likedThought, setLikedThougt] = useState([]);

  const getLikedThought = (id) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (id === thought._id) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
    if (!likedThought.includes(id)) {
      setLikedThougt([...likedThought, id]);
    }
  };
  return (
    <div className="thought-container">
      <p className="thought" id={id}>
        {message}
      </p>
      <div className="liked-container">
        <ThoughtLikes id={id} onLikedThought={() => onLikedThought(id)} />
        <p className="liked"> x {hearts}</p>
      </div>
      <p className="thought-time">{time}</p>
    </div>
  );
};