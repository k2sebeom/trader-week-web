import React from 'react';
import { GameDTO } from '../types/dto';
import './table.css';
import './button.css';
import { useNavigate } from 'react-router-dom';
import { joinGame } from '../utils/api';
import Swal from 'sweetalert2';

interface RoomTableProps {
  rooms: GameDTO[];
}

function RoomTable({ rooms }: RoomTableProps) {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Theme</th>
            <th>Users</th>
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
                    const game = await joinGame(r.id);
                    if (game !== null) {
                      navigate(`/${r.id}`);
                    } else {
                      Swal.fire({
                        title: 'OOPS',
                        text: 'Failed to join the game!',
                        icon: 'error',
                        confirmButtonText: 'OK',
                      });
                    }
                  }}
                  className="styled-button"
                >
                  Join
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
