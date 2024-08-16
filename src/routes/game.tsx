import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDTO } from '../types/dto';
import { getGameInfo } from '../utils/api';

import './game.css';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import config from '../utils/configs';
import CompanyCard from '../components/CompanyCard/CompanyCard';

function Game() {
  const { gameId } = useParams();

  const [game, setGame] = useState<GameDTO>({
    id: -1,
    started: false,
    theme: '',
    users: [],
    companies: [],
  });

  const loadGame = useCallback(async () => {
    if (gameId !== undefined) {
      try {
        const id = parseInt(gameId);
        const data = await getGameInfo(id);
        if (data !== null) {
          setGame(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, [gameId]);

  useEffect(() => {
    loadGame();
  }, [loadGame]);

  return (
    <div className="container">
      <div className="header-bar"></div>

      <h1>
        <q>{game.theme}</q>
      </h1>

      <div className="section">
        <div className="games">
          {game.companies.map((c) => (
            <CompanyCard company={c} />
          ))}
        </div>

        <div className="participants">
          <h2 className="title">Participants</h2>
          {game.users.map((u) => (
            <ProfileCard user={u} key={`user-${u.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
