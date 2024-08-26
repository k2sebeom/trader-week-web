import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDTO } from '../types/dto';
import { getGameInfo } from '../utils/api';

import './game.css';

import CompanyCard from '../components/CompanyCard/CompanyCard';

import { Line } from 'react-chartjs-2';

import HeaderBar from '../components/HeaderBar/HeaderBar';

function Review() {
  const { gameId } = useParams();

  const [game, setGame] = useState<GameDTO>({
    id: -1,
    started: false,
    theme: '',
    participants: [],
    companies: [],
    closed: false,
    trades: [],
  });

  // const navigate = useNavigate();
  // const { t } = useTranslation();

  const getEarningRate = useCallback(
    (user_id: number): number[] => {
      const companyMap = Object.fromEntries(game.companies.map((c) => [c.id, c]));
      const userTrades = game.trades
        .filter((t) => t.user_id === user_id && t.amount !== 0)
        .sort((a, b) => {
          return a.day - b.day;
        });

      let deposit = 0;
      const holdings = Object.fromEntries(game.companies.map((c) => [c.id, 0]));
      const earnings = [0, 0, 0, 0, 0, 0, 0];

      for (let d = 0; d < 7; d++) {
        const dayTrades = userTrades.filter((t) => t.day === d);
        dayTrades.forEach((t) => {
          deposit -= t.amount * companyMap[t.company_id].history[t.day];
          holdings[t.company_id] += t.amount;
        });
        const worth = Object.entries(holdings)
          .map(([cid, h]) => h * companyMap[cid].history[d])
          .reduce((a, b) => a + b, deposit);
        earnings[d] = worth;
      }

      return earnings;
    },
    [game.companies, game.trades],
  );

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
      <HeaderBar />

      <h1>
        <q>{game.theme}</q>
      </h1>

      <div className="section">
        <div className="games">
          {game.companies.map((c) => (
            <div
              key={`company-${c.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CompanyCard company={c} showEvents={false} />
            </div>
          ))}
        </div>

        <div className="details">
          <div className="prices">
            <Line
              data={{
                labels: [...Array(8)].map((_, i) => `Day ${i}`),

                datasets: game.participants.map((u) => ({
                  label: u.nickname,
                  data: getEarningRate(u.id),
                })),
              }}
            />
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
      </div>
    </div>
  );
}

export default Review;
