import React from 'react';
import { GameDTO } from '../types/dto';
import './table.css';
import './button.css';
import { Link } from 'react-router-dom';

interface RoomTableProps {
  rooms: GameDTO[];
}

function RoomTable({ rooms }: RoomTableProps) {
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
              <td>{r.users.length}</td>
              <td>
                <Link to={`/${r.id}`}>
                  <button className="styled-button">Join</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomTable;
