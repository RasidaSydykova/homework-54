import React, {useState} from 'react';
import PlayingField from "./components/PlayingField";
import './App.css';
import TriesCounter from "./components/TriesCounter";
import ResetButton from "./components/ResetButton";

const App = () => {

  const createItems = () => {
    const array = [];
    for (let i = 0; i < 36; i++) {
      array.push({hasItem: false, clicked: false});
    }
    const random = Math.floor(Math.random() * array.length);
    array[random].hasItem = true;
    return array;
  };

  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);


  const clickItem = (index: number) => {
    const copyItems = [...items];
    const copyItem = {...items[index]};

    if (found) {
      return;
    }

    if (!copyItems[index].clicked) {
      copyItem.clicked = true;
      copyItems[index] = copyItem;
      setItems(copyItems);
      setTries(tries + 1);
    }

    if (copyItems[index].hasItem) {
      setFound(true);
    }
  };

  const resetGame = () => {
    setItems(createItems());
    setTries(0);
    setFound(false);
  };

  return (
    <div className="App">
      <h1>Hidden Item Game</h1>
      <PlayingField
        items={items}
        clickItem={clickItem}
        found={found}
      />
      <TriesCounter
        tries={tries}
      />
    <ResetButton
      resetGame={resetGame}
      />
    </div>
    );
};

export default App;
