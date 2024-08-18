import React from 'react';
import { CompanyDTO } from '../../types/dto';
import config from '../../utils/configs';

import CoinImg from '../../assets/images/coin.png';

import './card.css';

interface CompanyCardProps {
  company: CompanyDTO;
}

function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="card">
      <img className="thumbnail" src={`${config.api_base}/thumbnails/${company.thumbnail}`} alt={company.name} />

      <div className="info">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <img src={CoinImg} alt="gold" width={30} height={30} />
          <h3>{company.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
