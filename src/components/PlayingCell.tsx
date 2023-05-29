import React from 'react';

interface IPlayingCellProps {
  item: {hasItem: boolean, clicked: boolean};
  index: number;
  clickItem: (index: number) => void;
  found: boolean;
}

const PlayingCell: React.FC <IPlayingCellProps> = ({item, index, clickItem, found}) => {
  const click = () => {
    if (!item.clicked && !found) {
      clickItem(index);
    }
  };

  return (
    <div>
      <div className={`playing-cell ${item.clicked ? 'clicked' : ' '} ${found ? 'found' : ' '}`}
           onClick={click}> {item.clicked && item.hasItem && '🌸'}
      </div>
    </div>
  );
};

export default PlayingCell;