import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameDTO } from '../types/dto';
import { getGameInfo, leaveGame } from '../utils/api';

import './game.css';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import useMe from '../hooks/useMe';
import Swal from 'sweetalert2';

function Game() {
  const { gameId } = useParams();
  const me = useMe();

  const [game, setGame] = useState<GameDTO>({
    id: -1,
    started: false,
    theme: '',
    users: [],
    companies: [],
  });

  const navigate = useNavigate();

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
            <CompanyCard key={`company-${c.id}`} company={c} />
          ))}
        </div>

        <div className="participants">
          <h2 className="title">Participants</h2>
          {game.users.map((u) => (
            <div key={`user-${u.id}`}>
              <ProfileCard user={u} />
              {u.id === me?.id ? (
                <button
                  onClick={() => {
                    Swal.fire({
                      title: 'Leave Game?',
                      text: 'Do you really want to leave the game?',
                      confirmButtonText: 'Yes',
                      showCancelButton: true,
                      cancelButtonText: 'Actually, no',
                      icon: 'question',
                      showLoaderOnConfirm: true,
                      preConfirm: async () => {
                        const result = await leaveGame(game.id);
                        if (result === null) {
                          Swal.showValidationMessage('Failed to leave the room..');
                        } else {
                          navigate('/');
                        }
                      },
                    });
                  }}
                  className="leave-button"
                >
                  Leave
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <div className="start-area">
          {game.users.length > 0 && me?.id === game.users[0].id ? (
            <button
              style={{
                width: 200,
                height: 70,
                fontSize: 24,
              }}
              className="styled-button"
            >
              Start!
            </button>
          ) : (
            <button
              style={{
                width: 200,
                height: 70,
                fontSize: 24,
                backgroundColor: '#666',
              }}
              className="styled-button"
              disabled={true}
            >
              Wait...{' '}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
