import React from 'react';

interface ITriesCounterProps {
  tries: number;
}

const TriesCounter: React.FC<ITriesCounterProps> = ({tries}) => {
  return (
    <p>Tries: {tries}</p>
  );
};

export default TriesCounter;