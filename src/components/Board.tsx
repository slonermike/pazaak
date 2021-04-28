import React from 'react';
import Card, { DeckType } from './Card';

function Board() {
  return (
    <div className="Board">
      <Card deck={DeckType.MAIN_DECK} value={5} />
      <Card deck={DeckType.MAIN_DECK} value={10} />
      <Card deck={DeckType.MAIN_DECK} value={15} />
      <Card deck={DeckType.SIDE_DECK} value={5} />
      <Card deck={DeckType.SIDE_DECK} value={-5} />
      <Card deck={DeckType.SIDE_DECK} value={1} />
      <Card deck={DeckType.SIDE_DECK} value={5} reversible={true} />
      <Card deck={DeckType.SIDE_DECK} value={10} reversible={true} />
      <Card deck={DeckType.SIDE_DECK} value={15} reversible={true} />
    </div>
  );
}

export default Board;
