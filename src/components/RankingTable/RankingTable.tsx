import React from 'react';

import '../table.css';
import { UserDTO } from '../../types/dto';
import CoinImg from '../../assets/images/coin.png';
import { useTranslation } from 'react-i18next';

interface RankingTableProps {
  ranking: UserDTO[];
}

function RankingTable({ ranking }: RankingTableProps) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        width: 500,
        marginBottom: 30,
      }}
      className="table-container"
    >
      <table className="styled-table">
        <thead>
          <tr>
            <th align="center" colSpan={3}>
              {t('rankingTable.title')}
            </th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((r, i) => (
            <tr key={`rank-${i}`}>
              <td style={{ width: '2%' }}>#{i + 1}</td>
              <td style={{ width: '50%' }}>{r.nickname}</td>
              <td style={{ width: '50%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <img src={CoinImg} width={20} />
                  {r.gold}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RankingTable;
