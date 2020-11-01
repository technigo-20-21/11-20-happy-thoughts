import React from 'react';

export const SubmitButton = ({ isSubmitted }) => {
  return (
    <button
      type="submit"
      value="submit"
      onClick={isSubmitted}
      className="add-thought-button">
      Send Happy Thought
    </button>
  );
};