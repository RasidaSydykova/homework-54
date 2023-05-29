import React from 'react';

interface IResetButtonProps {
  resetGame: () => void;
}

const ResetButton: React.FC<IResetButtonProps> = ({resetGame}) => {
  return (
    <div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default ResetButton;