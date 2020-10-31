import React from 'react';
import { ThoughtsInput } from './components/ThoughtsInput'
import { ThoughtsList } from './components/ThoughtsList'

export const App = () => {
  return (
    <div>
      <ThoughtsInput />
      <ThoughtsList />
    </div>
  );
};
