import React, { useCallback, useEffect, useState } from 'react';

import './cover.css';
import { delay } from '../../utils/time';
import { CompanyDTO, GameDTO } from '../../types/dto';
import config from '../../utils/configs';
import { getGameResult, throwAll } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

interface EventCoverProps {
  day: number;
  onEnd: () => void;
  companies: CompanyDTO[];
  game: GameDTO;
}

interface Rankings {
  username: string;
  profit: number;
}

function EventCover({ day, onEnd, companies, game }: EventCoverProps) {
  const [animating, setAnimating] = useState<boolean>(false);
  const [mode, setMode] = useState<number>(0);
  const [company, setCompany] = useState<CompanyDTO>(companies[0]);

  const [ranking, setRanking] = useState<Rankings[]>([]);

  const navigate = useNavigate();

  const finishGame = useCallback(async () => {
    const resp = await getGameResult(game.id);
    if (resp !== null) {
      const data: Rankings[] = [];
      for (const [uid, p] of Object.entries(resp.result)) {
        data.push({
          username: game.participants.find((v) => v.id === parseInt(uid))?.nickname ?? 'user',
          profit: p,
        });
      }
      data.sort((a, b) => {
        return b.profit - a.profit;
      });
      setRanking(data);
    }
    await throwAll(game.id);
  }, [game.id, game.participants]);

  const animate = useCallback(async () => {
    if (game.started_at !== undefined && Date.now() - Date.parse(game.started_at) > config.game.seconds_per_turn * 8) {
      setMode(2);
      await finishGame();
      return;
    }

    if (companies.length > 0 && !animating) {
      setAnimating(true);
      await delay(2000);
      for (const c of companies) {
        setCompany(c);
        if (c.events.length > 0) {
          setMode(1);
          await delay(3000);
        }
      }
      if (game.closed) {
        await finishGame();
        setMode(2);
      } else {
        onEnd();
      }
    }
  }, [setMode, companies, animating, onEnd, game.closed, finishGame, game.started_at]);

  useEffect(() => {
    animate();
  }, [animate]);

  switch (mode) {
    case 0:
      return (
        <div className="cover">
          <h1>Day {day}</h1>
        </div>
      );
    case 1:
      return (
        <div className="cover">
          <div className="cover-card">
            <img className="thumbnail" src={`${config.api_base}/thumbnails/${company.thumbnail}`} alt={company.name} />

            <div className="cover-info">
              <h2>{company.name}</h2>
              <p>{company.events[day - 1].description}</p>
              <h3
                style={{
                  color: company.events[day - 1].price >= 0 ? 'red' : 'blue',
                }}
              >
                {company.events[day - 1].price} %
              </h3>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="cover">
          <div className="cover-card">
            <div className="cover-info">
              <h2>Market is now Closed!</h2>
              <div
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                }}
              >
                {ranking.map((r, i) => (
                  <div
                    style={{
                      display: 'flex',
                      gap: 10,
                    }}
                    key={`rank-${i}`}
                  >
                    <h2>#{i + 1}</h2>
                    <h2>{r.username}</h2>
                    <h2>{r.profit}</h2>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/')} className="styled-button">
                Great!
              </button>
            </div>
          </div>
        </div>
      );
  }
}

export default EventCover;
