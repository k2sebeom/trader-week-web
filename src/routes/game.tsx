import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameDTO } from '../types/dto';
import { getGameInfo, leaveGame } from '../utils/api';

import './game.css';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import useMe from '../hooks/useMe';
import Swal from 'sweetalert2';
import { Line } from 'react-chartjs-2';
import TradeButton from '../components/TradeButton/TradeButton';
import CoinImg from '../assets/images/coin.png';
import EventCover from '../components/EventCover/EventCover';

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

  const [deposit, setDeposit] = useState<number>(0);
  const [holdings, setHoldings] = useState<number[]>([0, 0, 0, 0, 0]);

  const [currDay, setCurrDay] = useState<number>(0);

  const [showCover, setShowCover] = useState<boolean>(false);

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
    let job = setInterval(loadGame, 3000);
    return () => {
      clearInterval(job);
    };
  }, [loadGame]);

  useEffect(() => {
    if (me !== null) {
      let gold = me.gold;
      game.companies.forEach((c, i) => {
        gold -= holdings[i] * c.price;
      });
      setDeposit(gold);
    }
  }, [me, game, holdings]);

  useEffect(() => {
    if (game.companies.length > 0) {
      if (game.companies[0].events.length > currDay) {
        setShowCover(true);
        setCurrDay(game.companies[0].events.length);
      }
    }
  }, [game, currDay]);

  useEffect(() => {
    function onUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
      return '';
    }
    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, []);

  return (
    <div className="container">
      {showCover ? (
        <EventCover
          day={currDay}
          onEnd={() => {
            setShowCover(false);
          }}
          companies={game.companies}
        />
      ) : null}
      <div className="header-bar"></div>

      <h1>
        <q>{game.theme}</q>
      </h1>

      <div className="section">
        <div className="games">
          {game.companies.map((c, i) => (
            <div
              key={`company-${c.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CompanyCard company={c} />
              {game.started || true ? (
                <TradeButton
                  enabled={deposit >= c.price}
                  value={holdings[i]}
                  onSell={() => {
                    setHoldings((prev) => {
                      const newHoldings = [...prev];
                      newHoldings[i] -= 1;
                      return newHoldings;
                    });
                  }}
                  onBuy={() => {
                    setHoldings((prev) => {
                      const newHoldings = [...prev];
                      newHoldings[i] += 1;
                      return newHoldings;
                    });
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="deposit">
          <h2>Deposit: </h2>
          <img src={CoinImg} alt="gold" width={30} height={30} />
          <h2>{deposit}</h2>
        </div>

        <button className="styled-button">Trade</button>

        <div className="details">
          <div className="participants">
            <h2 className="title">Participants</h2>
            {game.users.map((u) => (
              <div style={{ position: 'relative' }} key={`user-${u.id}`}>
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

          <div className="prices">
            <Line
              data={{
                labels: [...Array(8)].map((_, i) => `Day ${i}`),
                datasets: game.companies.map((c) => ({
                  label: c.name,
                  data: c.history,
                })),
              }}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (ctx) => {
                        const comp = game.companies[ctx.datasetIndex];
                        if (ctx.dataIndex === 0) {
                          return `${comp.history[0]}`;
                        }
                        return comp.events[ctx.dataIndex - 1].description;
                      },
                    },
                  },
                },
              }}
            />
          </div>
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
