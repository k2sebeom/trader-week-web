import React from 'react';
import { GameDTO, UserDTO } from '../types/dto';
import './table.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { getGameInfo, joinGame } from '../utils/api';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

interface RoomTableProps {
  rooms: GameDTO[];
  isActive: boolean;
  me: UserDTO | null;
}

function RoomTable({ me, rooms, isActive }: RoomTableProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>{t('gameTable.theme')}</th>
            <th>{t('gameTable.users')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((r) => (
            <tr key={`room-${r.id}`}>
              <td>{r.theme}</td>
              <td>{r.participants.length}</td>
              <td>
                <button
                  onClick={async () => {
                    if (me === null) {
                      Swal.fire(t('warnings.unauthorized'), '', 'warning');
                      return;
                    }
                    let game;
                    if (isActive) {
                      game = await joinGame(r.id);
                    } else {
                      game = await getGameInfo(r.id);
                    }

                    if (game !== null) {
                      navigate(`/${r.id}`);
                    } else {
                      Swal.fire({
                        title: t('warnings.generic'),
                        icon: 'error',
                      });
                    }
                  }}
                  className="styled-button"
                >
                  {isActive ? t('gameTable.join') : t('historyTable.view')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomTable;
