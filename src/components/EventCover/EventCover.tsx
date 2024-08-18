import React, { useCallback, useEffect, useState } from 'react';

import './cover.css';
import { delay } from '../../utils/time';
import { CompanyDTO } from '../../types/dto';
import config from '../../utils/configs';

interface EventCoverProps {
  day: number;
  onEnd: () => void;
  companies: CompanyDTO[];
}

function EventCover({ day, onEnd, companies }: EventCoverProps) {
  const [animating, setAnimating] = useState<boolean>(false);
  const [mode, setMode] = useState<number>(0);
  const [company, setCompany] = useState<CompanyDTO>(companies[0]);

  const animate = useCallback(async () => {
    if (companies.length > 0 && !animating) {
      setAnimating(true);
      await delay(2000);
      for (const c of companies) {
        setCompany(c);
        setMode(1);
        await delay(3000);
      }
      onEnd();
    }
  }, [setMode, companies, animating]);

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
      return null;
  }
}

export default EventCover;
