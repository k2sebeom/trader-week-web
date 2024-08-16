import React from 'react';
import { CompanyDTO } from '../../types/dto';
import config from '../../utils/configs';

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
      </div>
    </div>
  );
}

export default CompanyCard;
