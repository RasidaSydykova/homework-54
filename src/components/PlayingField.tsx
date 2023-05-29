import React from 'react';
import {Items} from "../types";
import PlayingCell from "./PlayingCell";

interface IPlayingFieldProps {
  items: Items[];
  clickItem: (index: number) => void;
  found: boolean;
}

const PlayingField: React.FC<IPlayingFieldProps> = ({items,clickItem, found}) => {
  return (
    <div className="playing-field">
      <div className="playing-board">
        {items.map((item, index) => (
          <PlayingCell
            key={index}
            item={item}
            index={index}
            clickItem={clickItem}
            found={found}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayingField;