import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GameDTO } from '../types/dto';
import { getGameInfo, leaveGame, makeTrade, startGame, TradeDetail } from '../utils/api';

import './game.css';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import useMe from '../hooks/useMe';
import Swal from 'sweetalert2';
import { Line } from 'react-chartjs-2';
import TradeButton from '../components/TradeButton/TradeButton';
import CoinImg from '../assets/images/coin.png';
import EventCover from '../components/EventCover/EventCover';
import config from '../utils/configs';

function Game() {
  const { gameId } = useParams();
  const me = useMe();

  const [game, setGame] = useState<GameDTO>({
    id: -1,
    started: false,
    theme: '',
    participants: [],
    companies: [],
    started_at: Date(),
    closed: false,
    trades: [],
  });

  // For local trades
  const [deposit, setDeposit] = useState<number>(0);
  const [holdings, setHoldings] = useState<number[]>([0, 0, 0, 0, 0]); // True Value
  const [delta, setDelta] = useState<number[]>([...holdings]);

  const [currDay, setCurrDay] = useState<number>(-1);

  const [showCover, setShowCover] = useState<boolean>(false);

  const [deadline, setDeadline] = useState<number>(Date.now());
  const [timeperc, setTimeperc] = useState<number>(0);

  const navigate = useNavigate();

  const loadGame = useCallback(async () => {
    if (gameId !== undefined) {
      try {
        const id = parseInt(gameId);
        const data = await getGameInfo(id);
        if (data !== null) {
          setGame(data);

          if (me !== null) {
            const p = data.participants.find((u) => u.id === me.id);
            if (p !== undefined) {
              setDeposit(p.gold);
              setHoldings(data.companies.map((c) => p.holdings[c.id]));
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, [gameId, me]);

  const getCurrDeposit = useCallback((): number => {
    let gold = deposit;
    if (game.companies.length !== delta.length) {
      return gold;
    }
    delta.forEach((d, i) => {
      gold -= d * game.companies[i].price;
    });
    return gold;
  }, [deposit, delta, game.companies]);

  const getDeltaTrades = useCallback((): TradeDetail[] => {
    const trades = delta.map((d, i) => {
      return {
        company_id: game.companies[i].id,
        amount: d,
      };
    });
    return trades;
  }, [game.companies, delta]);

  const performTrade = useCallback(
    async (trades: TradeDetail[]) => {
      const data = await makeTrade(game.id, trades);
      if (data === null) {
        Swal.showValidationMessage('Failed to make trade...');
      } else {
        const result = game.companies.map((c) => data.holdings[c.id]);
        setHoldings(result);
        setDeposit(data.gold);
        setDelta(game.companies.map(() => 0));
      }
    },
    [game.companies, game.id],
  );

  // Refresh Game every 3 seconds
  useEffect(() => {
    loadGame();
    const job = setInterval(loadGame, 3000);
    return () => {
      clearInterval(job);
    };
  }, [loadGame]);

  // New Event Happened!
  useEffect(() => {
    if (game.started && game.companies.length > 0) {
      if (game.companies[0].events.length > currDay) {
        setShowCover(true);
        setCurrDay(game.companies[0].events.length);

        if (game.companies[0].events.length === 0 && game.started_at) {
          setDeadline(Date.parse(game.started_at) + (config.game.seconds_per_turn - 5) * 1000);
        } else {
          const lastEvent = game.companies[0].events[game.companies[0].events.length - 1];
          setDeadline(Date.parse(lastEvent.happen_at) + (config.game.seconds_per_turn - 5) * 1000);
        }
      }
    }
  }, [game, currDay]);

  // Timer Tick
  useEffect(() => {
    const job = setInterval(() => {
      if (Date.now() < deadline) {
        setTimeperc(100 - (deadline - Date.now()) / ((config.game.seconds_per_turn - 5) * 10));
      }
    }, 200);
    return () => {
      clearInterval(job);
    };
  }, [deadline]);

  // Prevent Refresh
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
          game={game}
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
              {game.started ? (
                <TradeButton
                  enabled={getCurrDeposit() >= c.price}
                  value={holdings[i] + delta[i]}
                  onSell={() => {
                    setDelta((prev) => {
                      const newDelta = [...prev];
                      newDelta[i] -= 1;
                      return newDelta;
                    });
                  }}
                  onBuy={() => {
                    setDelta((prev) => {
                      const newDelta = [...prev];
                      newDelta[i] += 1;
                      return newDelta;
                    });
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
        {game.started ? (
          <div className="deposit">
            <h2>Deposit: </h2>
            <img src={CoinImg} alt="gold" width={30} height={30} />
            <h2>{getCurrDeposit()}</h2>
          </div>
        ) : null}

        {game.started ? (
          <button
            onClick={async () => {
              const trades = getDeltaTrades();
              await Swal.fire({
                title: 'Make trade?',
                html: trades
                  .map((_, i) => `<p>${game.companies[i].name}: ${holdings[i]} -> ${holdings[i] + delta[i]}</p>`)
                  .join('\n'),
                confirmButtonText: 'Good to go',
                showCancelButton: true,
                cancelButtonText: 'Wait...',
                preConfirm: async () => await performTrade(trades),
                showLoaderOnConfirm: true,
              });
            }}
            className="styled-button"
          >
            Trade
          </button>
        ) : null}

        <div className="details">
          <div className="participants">
            <h2 className="title">Participants</h2>
            {game.participants.map((u) => (
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
        {game.started ? (
          <div
            style={{
              width: '100%',
              backgroundColor: '#f3f3f3',
              borderRadius: 5,
              overflow: 'hidden',
              height: 30,

              marginTop: 20,
              position: 'sticky',
              bottom: 20,
              zIndex: 3,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${timeperc}%`,
                backgroundColor: '#e08f2c',
                textAlign: 'center',
                lineHeight: '30px',
                color: 'white',
                transition: 'width 0.25s',
              }}
            ></div>
          </div>
        ) : (
          <div className="start-area">
            {me !== null && me.id === game.owner_id ? (
              <button
                style={{
                  width: 200,
                  height: 70,
                  fontSize: 24,
                }}
                className="styled-button"
                onClick={async () => {
                  const result = await Swal.fire('Start Game?', 'This will immediately start the market', 'question');
                  if (result.isConfirmed) {
                    const resp = await startGame(game.id);
                    if (resp === null) {
                      Swal.fire('Failed to start the market', 'Try again later...', 'error');
                    }
                  }
                }}
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
        )}
      </div>
    </div>
  );
}

export default Game;
