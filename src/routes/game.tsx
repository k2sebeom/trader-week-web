import React from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { gameId: game_id } = useParams();
  return (
    <div>
      <h1>{game_id}</h1>
    </div>
  );
}

export default Game;
